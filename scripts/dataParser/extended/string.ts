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

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct<
		const GenericDefinition extends dataParsers.DataParserDefinitionString,
	>(
		definition: GenericDefinition
	): DataParserStringExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionString,
			GenericDefinition
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
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionStringMin, "min">
		>
	): DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerStringMin]
		>
	>;

	max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionStringMax, "max">
		>
	): DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerStringMax]
		>
	>;

	regex(
		regex: RegExp,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionStringRegex, "regex">
		>
	): DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerStringRegex]
		>
	>;
}

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
	) as never;

	return string.overrideHandler.apply(self) as never;
}

string.overrideHandler = createOverride<DataParserStringExtended>("@duplojs/utils/data-parser-extended/string");

export function email(
	definition?: Partial<dataParsers.DataParserCheckerDefinitionEmail>,
) {
	return string({
		checkers: [dataParsers.checkerEmail(definition)],
	});
}

export function url(
	definition?: Partial<dataParsers.DataParserCheckerDefinitionUrl>,
) {
	return string({
		checkers: [dataParsers.checkerUrl(definition)],
	});
}
