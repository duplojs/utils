import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { type DataParserCheckerUrl, type DataParserCheckerEmail, type DataParserCheckerStringMin, type DataParserCheckerStringMax, type DataParserCheckerStringRegex } from "./checkers";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../kind";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export * from "./checkers";

export interface DataParserStringCheckerCustom {}

export type DataParserStringCheckers = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserStringCheckerCustom[
		GetPropsWithValueExtends<
			DataParserStringCheckerCustom,
			DataParserChecker
		>
	]
	| DataParserCheckerUrl
	| DataParserCheckerEmail
	| DataParserCheckerStringMin
	| DataParserCheckerStringMax
	| DataParserCheckerStringRegex
	| CheckerRefineImplementation<string>
);

export interface DataParserDefinitionString extends DataParserDefinition<
	DataParserStringCheckers
> {
	readonly coerce: boolean;
}

export const stringKind = createDataParserKind("string");

type _DataParserString<
	GenericDefinition extends DataParserDefinitionString,
> = (
	& DataParser<
		GenericDefinition,
		string,
		string
	>
	& Kind<typeof stringKind.definition>
);

export interface DataParserString<
	GenericDefinition extends DataParserDefinitionString = DataParserDefinitionString,
> extends _DataParserString<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserStringCheckers,
			...DataParserStringCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserStringCheckers,
				...DataParserStringCheckers[],
			],
			GenericChecker
		>
	): DataParserString<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

export function string<
	const GenericDefinition extends Partial<DataParserDefinitionString> = never,
>(
	definition?: GenericDefinition,
): DataParserString<
		MergeDefinition<
			DataParserDefinitionString,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserInit<DataParserString>(
		stringKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce: definition?.coerce ?? false,
			},
		},
		(data, _error, self) => {
			if (self.definition.coerce) {
				try {
					// eslint-disable-next-line no-param-reassign
					data = String(data);
				} catch {}
			}

			if (typeof data === "string") {
				return data;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;

	return string.overrideHandler.apply(self) as never;
}

string.overrideHandler = createOverride<DataParserString>("@duplojs/utils/data-parser/string");
