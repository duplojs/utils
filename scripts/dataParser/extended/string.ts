import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserStringExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionString,
> = (
	& dataParsers.DataParserString<GenericDefinition>
	& DataParserExtended
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
		...args: GenericChecker
	): DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
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
	return dataParserExtendedInit<
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
}

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
