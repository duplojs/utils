import { type FixDeepFunctionInfer, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserDateExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionDate,
> = (
	& dataParsers.DataParserDate<GenericDefinition>
	& DataParserExtended
);

export interface DataParserDateExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionDate = dataParsers.DataParserDefinitionDate,
> extends _DataParserDateExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserDateCheckers,
			...dataParsers.DataParserDateCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserDateCheckers,
				...dataParsers.DataParserDateCheckers[],
			],
			GenericChecker
		>
	): DataParserDateExtended<
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
	): DataParserDateExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function date<
	const GenericDefinition extends Partial<dataParsers.DataParserDefinitionDate> = never,
>(
	definition?: GenericDefinition,
): DataParserDateExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionDate,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserDate,
		DataParserDateExtended
	>(
		dataParsers.date(definition),
		{},
	) as never;

	return date.overrideHandler.apply(self) as never;
}

date.overrideHandler = createOverride<DataParserDateExtended>("@duplojs/utils/data-parser-extended/date");
