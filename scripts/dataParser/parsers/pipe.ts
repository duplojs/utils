import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserPipeCheckerCustom<
	GenericInput extends unknown = unknown,
> {}

export type DataParserPipeCheckers<
	GenericInput extends unknown = unknown,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserPipeCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserPipeCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionPipe extends DataParserDefinition<DataParserPipeCheckers> {
	readonly input: DataParser;
	readonly output: DataParser;
}

export const pipeKind = createDataParserKind("pipe");

type _DataParserPipe<
	GenericDefinition extends DataParserDefinitionPipe,
> = (
	& DataParser<
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
			DataParserPipeCheckers<Output<this>>,
			...DataParserPipeCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserPipeCheckers<Output<this>>,
				...DataParserPipeCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserPipe<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	construct<
		const GenericDefinition extends DataParserDefinitionPipe,
	>(
		definition: GenericDefinition
	): DataParserPipe<
		MergeDefinition<
			DataParserDefinitionPipe,
			GenericDefinition
		>
	>;
}

export function pipe<
	GenericInput extends DataParser,
	GenericOutput extends DataParser,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionPipe, "input" | "output">
	> = never,
>(
	input: GenericInput,
	output: GenericOutput,
	definition?: GenericDefinition,
): DataParserPipe<
		MergeDefinition<
			DataParserDefinitionPipe,
			NeverCoalescing<GenericDefinition, {}> & {
				input: GenericInput;
				output: GenericOutput;
			}
		>
	> {
	const self = dataParserInit<DataParserPipe>(
		pipeKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			input,
			output,
		},
		{
			sync: (data, error, self) => {
				const result = self.definition.input.exec(data, error);

				if (result === SymbolDataParserError) {
					return SymbolDataParserError;
				}

				return self.definition.output.exec(result, error);
			},
			async: async(data, error, self) => {
				const result = await self.definition.input.asyncExec(data, error);

				if (result === SymbolDataParserError) {
					return SymbolDataParserError;
				}

				return self.definition.output.asyncExec(result, error);
			},
		},
	) as never;

	return pipe.overrideHandler.apply(self) as never;
}

pipe.overrideHandler = createOverride<DataParserPipe>("@duplojs/utils/data-parser/pipe");
