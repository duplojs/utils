import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
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

export interface DataParserDefinitionDate extends DataParserDefinition<
	DataParserDateCheckers
> {
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

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct<
		const GenericDefinition extends DataParserDefinitionDate,
	>(
		definition: GenericDefinition
	): DataParserDate<
		MergeDefinition<
			DataParserDefinitionDate,
			GenericDefinition
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
	const self = dataParserInit<DataParserDate>(
		dateKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
		},
		(data, _error, self) => {
			if (self.definition.coerce) {
				if (data instanceof Date) {
					const timestamp = data.getTime();

					if (!isSafeTimestamp(timestamp)) {
						return SymbolDataParserErrorIssue;
					}

					const isNegative = timestamp < 0;

					return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
				}

				if (typeof data === "number") {
					if (!isSafeTimestamp(data)) {
						return SymbolDataParserErrorIssue;
					}

					const isNegative = data < 0;

					return `date${Math.abs(data)}${isNegative ? "-" : "+"}`;
				}

				if (typeof data === "string") {
					const date = new Date(data);

					const timestamp = date.getTime();

					if (isSafeTimestamp(timestamp)) {
						const isNegative = timestamp < 0;

						return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
					}
				}
			}

			const theDateMatch = typeof data === "string" && data.match(theDateRegex);

			if (theDateMatch) {
				if (!isSafeTimestamp(Number(theDateMatch.groups?.value))) {
					return SymbolDataParserErrorIssue;
				}

				return data as TheDate;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;

	return date.overrideHandler.apply(self) as never;
}

date.overrideHandler = createOverride<DataParserDate>("@duplojs/utils/data-parser/date");
