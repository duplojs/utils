import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type DataParserChecker } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../kind";

export * from "./checkers";

export type DataParserStringCheckers = GetEligibleChecker<string>;

export interface DataParserDefinitionString extends DataParserDefinition<
	DataParserStringCheckers
> {
	readonly coerce: boolean;
}

export const stringKind = createDataParserKind("string");

type _DataParserString<
	GenericDefinition extends DataParserDefinitionString,
> = (
	& DataParserBase<
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
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
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

/**
 * {@include dataParser/classic/string/index.md}
 */
export function string<
	const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionString> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<DataParserDefinitionString>,
		GenericDefinition
	>,
): DataParserString<
		MergeDefinition<
			DataParserDefinitionString,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseInit<DataParserString>(
		stringKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
		},
		(data, error, self) => {
			const inputData = data;
			if (self.definition.coerce) {
				try {
					// eslint-disable-next-line no-param-reassign
					data = String(data);
				} catch {}
			}

			if (typeof data === "string") {
				return data;
			}

			return addIssue(error, "string", inputData, self.definition.errorMessage);
		},
		string.overrideHandler,
	) as never;

	return self as never;
}

string.overrideHandler = createOverride<DataParserString>("@duplojs/utils/data-parser/string");
