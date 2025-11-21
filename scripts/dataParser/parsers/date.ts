import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";
import { type TheDate, theDateRegex } from "@scripts/date";
import { isSafeTimestamp } from "@scripts/date/isSafeTimestamp";

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
		return parseExistingTheDate(data);
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
	if (!isSafeTimestamp(timestamp)) {
		return undefined;
	}

	const sign = timestamp < 0 ? "-" : "+";
	const magnitude = Math.abs(timestamp);

	return `date${magnitude}${sign}` as TheDate;
}
