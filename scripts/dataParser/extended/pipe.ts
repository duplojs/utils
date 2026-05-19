import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserBaseExtended, dataParserBaseExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser, type Input, type Output, type DataParserChecker } from "../base";

type _DataParserPipeExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionPipe,
> = (
	& Kind<typeof dataParsers.pipeKind.definition>
	& DataParserBaseExtended<
		GenericDefinition,
		Output<dataParsers.DataParserPipe<GenericDefinition>>,
		Input<dataParsers.DataParserPipe<GenericDefinition>>
	>
);

export interface DataParserPipeExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionPipe = dataParsers.DataParserDefinitionPipe,
> extends _DataParserPipeExtended<GenericDefinition> {
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
	): DataParserPipeExtended<
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
	): DataParserPipeExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/pipe/index.md}
 */
export function pipe<
	GenericInput extends DataParser,
	GenericOutput extends DataParser,
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionPipe<
			Output<GenericOutput>
		>,
		"input" | "output"
	> = never,
>(
	input: GenericInput,
	output: GenericOutput,
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionPipe<
				Output<GenericOutput>
			>,
		"input" | "output"
		>,
		GenericDefinition
	>,
): DataParserPipeExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionPipe,
			NeverCoalescing<GenericDefinition, {}> & {
				input: GenericInput;
				output: GenericOutput;
			}
		>
	> {
	const self = dataParserBaseExtendedInit<
		dataParsers.DataParserPipe,
		DataParserPipeExtended
	>(
		dataParsers.pipe(input, output, definition),
		{},
		pipe.overrideHandler,
	);

	return self as never;
}

pipe.overrideHandler = createOverride<DataParserPipeExtended>("@duplojs/utils/data-parser-extended/pipe");
