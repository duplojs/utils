import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input, SymbolDataParserError, type DataParser, type DataParserChecker } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";
import { popErrorPath, setErrorPath } from "../error";

export type DataParserPipeCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionPipe<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserPipeCheckers<GenericInput>
	> {
	readonly input: DataParser;
	readonly output: DataParser;
}

export const pipeKind = createDataParserKind("pipe");

type _DataParserPipe<
	GenericDefinition extends DataParserDefinitionPipe,
> = (
	& DataParserBase<
		GenericDefinition,
		Output<GenericDefinition["output"]>,
		Input<GenericDefinition["input"]>
	>
	& Kind<typeof pipeKind.definition>
);

export interface DataParserPipe<
	GenericDefinition extends DataParserDefinitionPipe = DataParserDefinitionPipe,
> extends _DataParserPipe<GenericDefinition> {
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
	): DataParserPipe<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/pipe/index.md}
 */
export function pipe<
	GenericInput extends DataParser,
	GenericOutput extends DataParser,
	const GenericDefinition extends PrepareDataParserDefinition<
		DataParserDefinitionPipe<
			Output<GenericOutput>
		>,
		"input" | "output"
	> = never,
>(
	input: GenericInput,
	output: GenericOutput,
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			DataParserDefinitionPipe<
				Output<GenericOutput>
			>,
			"input" | "output"
		>,
		GenericDefinition
	>,
): DataParserPipe<
		MergeDefinition<
			DataParserDefinitionPipe,
			NeverCoalescing<GenericDefinition, {}> & {
				input: GenericInput;
				output: GenericOutput;
			}
		>
	> {
	const self = dataParserBaseInit<DataParserPipe>(
		pipeKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			input,
			output,
		},
		{
			sync: (data, error, self) => {
				const currentIndexPath = error.currentPath.length;

				setErrorPath(error, "(pipeIn)", currentIndexPath);
				const resultIn = self.definition.input.exec(data, error);

				if (resultIn === SymbolDataParserError) {
					popErrorPath(error);
					return SymbolDataParserError;
				}

				setErrorPath(error, "(pipeOut)", currentIndexPath);
				const resultOut = self.definition.output.exec(resultIn, error);

				popErrorPath(error);
				return resultOut;
			},
			async: async(data, error, self) => {
				const currentIndexPath = error.currentPath.length;

				setErrorPath(error, "(pipeIn)", currentIndexPath);
				const resultIn = await self.definition.input.asyncExec(data, error);

				if (resultIn === SymbolDataParserError) {
					popErrorPath(error);
					return SymbolDataParserError;
				}

				setErrorPath(error, "(pipeOut)", currentIndexPath);
				return self.definition.output.asyncExec(resultIn, error)
					.then(
						(resultOut) => {
							popErrorPath(error);
							return resultOut;
						},
					);
			},
			isAsynchronous: (self) => self.definition.input.isAsynchronous() || self.definition.output.isAsynchronous(),
		},
		pipe.overrideHandler,
	) as never;

	return self as never;
}

pipe.overrideHandler = createOverride<DataParserPipe>("@duplojs/utils/data-parser/pipe");
