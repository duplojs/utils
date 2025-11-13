import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";
import { type TheDate, minTimestamp, maxTimestamp, theDateRegex, dateComponentsRegex } from "@scripts/date";

export interface DataParserDateCheckerCustom {}

export type DataParserDateCheckers = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserDateCheckerCustom[
		GetPropsWithValueExtends<
			DataParserDateCheckerCustom,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<TheDate>
);

export interface DataParserDefinitionDate extends DataParserDefinition<DataParserDateCheckers> {
	readonly coerce: boolean;
}

export const dateKind = createDataParserKind("date");

type _DataParserDate<
	GenericDefinition extends DataParserDefinitionDate,
> = (
	& DataParser<
		GenericDefinition,
		TheDate,
		TheDate
	>
	& Kind<typeof dateKind.definition>
);

export interface DataParserDate<
	GenericDefinition extends DataParserDefinitionDate = DataParserDefinitionDate,
> extends _DataParserDate<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserDateCheckers,
			...DataParserDateCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserDateCheckers,
				...DataParserDateCheckers[],
			],
			GenericChecker
		>
	): DataParserDate<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

export function date<
	const GenericDefinition extends Partial<DataParserDefinitionDate> = never,
>(
	definition?: GenericDefinition,
): DataParserDate<
		MergeDefinition<
			DataParserDefinitionDate,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	return dataParserInit<DataParserDate>(
		dateKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce: definition?.coerce ?? false,
			},
		},
		(data, _error, self) => {
			const result = self.definition.coerce
				? coerceToTheDate(data)
				: parseExistingTheDate(data);

			if (result) {
				return result;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}

function parseExistingTheDate(data: unknown): TheDate | undefined {
	if (
		typeof data === "string"
		&& theDateRegex.test(data)
	) {
		return data as TheDate;
	}

	return undefined;
}

function coerceToTheDate(data: unknown): TheDate | undefined {
	if (typeof data === "string") {
		const existing = parseExistingTheDate(data);
		if (existing) {
			return existing;
		}

		return fromDateComponentsString(data);
	}

	if (typeof data === "number") {
		return fromTimestamp(data);
	}

	if (data instanceof Date) {
		return fromTimestamp(data.getTime());
	}

	return undefined;
}

function fromTimestamp(timestamp: number): TheDate | undefined {
	if (
		!Number.isSafeInteger(timestamp)
		|| timestamp < minTimestamp
		|| timestamp > maxTimestamp
	) {
		return undefined;
	}

	const sign = timestamp < 0 ? "-" : "+";
	const magnitude = Math.abs(timestamp);

	return `date${magnitude}${sign}` as TheDate;
}

function fromDateComponentsString(value: string): TheDate | undefined {
	const match = value.match(dateComponentsRegex);

	if (!match) {
		return undefined;
	}

	const [
		,
		signStr,
		yearStr,
		monthStr,
		dayStr,
		hourStr,
		minuteStr,
		secondStr,
		millisecondStr,
	] = match;

	const yearValue = Number(yearStr);
	const monthValue = Number(monthStr);
	const dayValue = Number(dayStr);

	if (
		Number.isNaN(yearValue)
		|| Number.isNaN(monthValue)
		|| Number.isNaN(dayValue)
		|| monthValue < 1
		|| monthValue > 12
		|| dayValue < 1
		|| dayValue > 31
	) {
		return undefined;
	}

	const hourValue = hourStr === undefined ? undefined : Number(hourStr);
	const minuteValue = minuteStr === undefined ? undefined : Number(minuteStr);
	const secondValue = secondStr === undefined ? undefined : Number(secondStr);
	const millisecondValue = millisecondStr === undefined ? undefined : Number(millisecondStr);

	if (
		(hourValue !== undefined && (Number.isNaN(hourValue) || hourValue < 0 || hourValue > 23))
		|| (minuteValue !== undefined && (Number.isNaN(minuteValue) || minuteValue < 0 || minuteValue > 59))
		|| (secondValue !== undefined && (Number.isNaN(secondValue) || secondValue < 0 || secondValue > 59))
		// eslint-disable-next-line @stylistic/js/max-len
		|| (millisecondValue !== undefined && (Number.isNaN(millisecondValue) || millisecondValue < 0 || millisecondValue > 999))
	) {
		return undefined;
	}

	const signedYear = signStr === "-" ? -yearValue : yearValue;
	const date = new Date(0);

	date.setUTCFullYear(signedYear);
	date.setUTCMonth(monthValue - 1);
	date.setUTCDate(dayValue);

	if (hourValue !== undefined) {
		date.setUTCHours(hourValue);
	} else {
		date.setUTCHours(0);
	}

	if (minuteValue !== undefined) {
		date.setUTCMinutes(minuteValue);
	} else {
		date.setUTCMinutes(0);
	}

	if (secondValue !== undefined) {
		date.setUTCSeconds(secondValue);
	} else {
		date.setUTCSeconds(0);
	}

	if (millisecondValue !== undefined) {
		date.setUTCMilliseconds(millisecondValue);
	} else {
		date.setUTCMilliseconds(0);
	}

	if (
		date.getUTCFullYear() !== signedYear
		|| date.getUTCMonth() !== monthValue - 1
		|| date.getUTCDate() !== dayValue
		|| (hourValue !== undefined && date.getUTCHours() !== hourValue)
		|| (minuteValue !== undefined && date.getUTCMinutes() !== minuteValue)
		|| (secondValue !== undefined && date.getUTCSeconds() !== secondValue)
		|| (millisecondValue !== undefined && date.getUTCMilliseconds() !== millisecondValue)
	) {
		return undefined;
	}

	return fromTimestamp(date.getTime());
}
