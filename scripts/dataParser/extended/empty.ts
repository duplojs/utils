import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserBaseExtended, dataParserBaseExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParserChecker } from "../base";

type _DataParserEmptyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionEmpty,
> = (
	& Kind<typeof dataParsers.emptyKind.definition>
	& DataParserBaseExtended<
		GenericDefinition,
		Output<dataParsers.DataParserEmpty<GenericDefinition>>,
		Input<dataParsers.DataParserEmpty<GenericDefinition>>
	>
);

export interface DataParserEmptyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionEmpty = dataParsers.DataParserDefinitionEmpty,
> extends _DataParserEmptyExtended<GenericDefinition> {
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
	): DataParserEmptyExtended<
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
	): DataParserEmptyExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/empty/index.md}
 */
export function empty<
	const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty>,
		GenericDefinition
	>,
): DataParserEmptyExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionEmpty,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseExtendedInit<
		dataParsers.DataParserEmpty,
		DataParserEmptyExtended
	>(
		dataParsers.empty(definition),
		{},
		empty.overrideHandler,
	);

	return self as never;
}

empty.overrideHandler = createOverride<DataParserEmptyExtended>("@duplojs/utils/data-parser-extended/empty");
