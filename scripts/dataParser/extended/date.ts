import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
import { type TheDate } from "@scripts/date";

type _DataParserDateExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionDate,
> = (
	& Kind<typeof dataParsers.dateKind.definition>
	& DataParserExtended<
		GenericDefinition,
		TheDate,
		TheDate
	>
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

	construct<
		const GenericDefinition extends dataParsers.DataParserDefinitionDate,
	>(
		definition: GenericDefinition
	): DataParserDateExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionDate,
			GenericDefinition
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
