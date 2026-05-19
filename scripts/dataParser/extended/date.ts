import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserBaseExtended, dataParserBaseExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output, type Input, type DataParserChecker } from "../base";

type _DataParserDateExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionDate,
> = (
	& Kind<typeof dataParsers.dateKind.definition>
	& DataParserBaseExtended<
		GenericDefinition,
		Output<dataParsers.DataParserDate<GenericDefinition>>,
		Input<dataParsers.DataParserDate<GenericDefinition>>
	>
);

export interface DataParserDateExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionDate = dataParsers.DataParserDefinitionDate,
> extends _DataParserDateExtended<GenericDefinition> {
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
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/date/index.md}
 */
export function date<
	const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionDate> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<dataParsers.DataParserDefinitionDate>,
		GenericDefinition
	>,
): DataParserDateExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionDate,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseExtendedInit<
		dataParsers.DataParserDate,
		DataParserDateExtended
	>(
		dataParsers.date(definition),
		{},
		date.overrideHandler,
	);

	return self as never;
}

date.overrideHandler = createOverride<DataParserDateExtended>("@duplojs/utils/data-parser-extended/date");
