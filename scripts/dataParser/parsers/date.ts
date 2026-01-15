import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";
import { type TheDate } from "@scripts/date";
import * as DDate from "@scripts/date";

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
}

/**
 * {@include dataParser/classic/date/index.md}
 */
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

					if (!DDate.isSafeTimestamp(timestamp)) {
						return SymbolDataParserErrorIssue;
					}
					return DDate.createTheDate(timestamp);
				}

				if (typeof data === "number") {
					if (!DDate.isSafeTimestamp(data)) {
						return SymbolDataParserErrorIssue;
					}

					return DDate.createTheDate(data);
				}

				if (typeof data === "string") {
					const date = new Date(data);
					const timestamp = date.getTime();
					if (DDate.isSafeTimestamp(timestamp)) {
						return DDate.createTheDate(timestamp);
					}
				}
			}

			if (typeof data === "string" && DDate.is(data)) {
				return data;
			}

			return SymbolDataParserErrorIssue;
		},
		date.overrideHandler,
	) as never;

	return self as never;
}

date.overrideHandler = createOverride<DataParserDate>("@duplojs/utils/data-parser/date");
