import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserBaseExtended, dataParserBaseExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParserChecker } from "../base";

type _DataParserNilExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNil,
> = (
	& Kind<typeof dataParsers.nilKind.definition>
	& DataParserBaseExtended<
		GenericDefinition,
		Output<dataParsers.DataParserNil<GenericDefinition>>,
		Input<dataParsers.DataParserNil<GenericDefinition>>
	>
);

export interface DataParserNilExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNil = dataParsers.DataParserDefinitionNil,
> extends _DataParserNilExtended<GenericDefinition> {
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
	): DataParserNilExtended<
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
	): DataParserNilExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/nil/index.md}
 */
export function nil<
	const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNil> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<dataParsers.DataParserDefinitionNil>,
		GenericDefinition
	>,
): DataParserNilExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNil,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseExtendedInit<
		dataParsers.DataParserNil,
		DataParserNilExtended
	>(
		dataParsers.nil(definition),
		{},
		nil.overrideHandler,
	);

	return self as never;
}

nil.overrideHandler = createOverride<DataParserNilExtended>("@duplojs/utils/data-parser-extended/nil");
