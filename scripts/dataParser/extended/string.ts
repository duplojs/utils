import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserStringExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionString,
> = (
	& Kind<typeof dataParsers.stringKind.definition>
	& DataParserExtended<
		GenericDefinition,
		string,
		string
	>
);

export interface DataParserStringExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionString = dataParsers.DataParserDefinitionString,
> extends _DataParserStringExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserStringCheckers,
			...dataParsers.DataParserStringCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserStringCheckers,
				...dataParsers.DataParserStringCheckers[],
			],
			GenericChecker
		>
	): DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	refine(
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/string/min/index.md}
	 */
	min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionStringMin, "min">
		>
	): DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.DataParserCheckerStringMin]
		>
	>;

	/**
	 * {@include dataParser/extended/string/max/index.md}
	 */
	max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionStringMax, "max">
		>
	): DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.DataParserCheckerStringMax]
		>
	>;

	/**
	 * {@include dataParser/extended/string/regex/index.md}
	 */
	regex(
		regex: RegExp,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionStringRegex, "regex">
		>
	): DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.DataParserCheckerStringRegex]
		>
	>;
}

/**
 * {@include dataParser/extended/string/index.md}
 */
export function string<
	const GenericDefinition extends Partial<dataParsers.DataParserDefinitionString> = never,
>(
	definition?: GenericDefinition,
): DataParserStringExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionString,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserString,
		DataParserStringExtended
	>(
		dataParsers.string(definition),
		{
			min(self, min, definition) {
				return self.addChecker(
					dataParsers.checkerStringMin(min, definition),
				);
			},
			max(self, max, definition) {
				return self.addChecker(
					dataParsers.checkerStringMax(max, definition),
				);
			},
			regex(self, regex, definition) {
				return self.addChecker(
					dataParsers.checkerStringRegex(regex, definition),
				);
			},
		},
		string.overrideHandler,
	);

	return self as never;
}

string.overrideHandler = createOverride<DataParserStringExtended>("@duplojs/utils/data-parser-extended/string");

/**
 * {@include dataParser/extended/email/index.md}
 */
export function email(
	definition?: Partial<dataParsers.DataParserCheckerDefinitionEmail>,
) {
	return string({
		checkers: [dataParsers.checkerEmail(definition)],
	});
}

/**
 * {@include dataParser/extended/url/index.md}
 */
export function url(
	definition?: Partial<dataParsers.DataParserCheckerDefinitionUrl>,
) {
	return string({
		checkers: [dataParsers.checkerUrl(definition)],
	});
}
