import { createKind, type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError } from "../base";
import { type DataParsers, type MergeDefinition } from "@scripts/dataParser/types";

export interface DataParserDefinitionPipe extends DataParserDefinition<never> {
	input: DataParsers;
	output: DataParsers;
}

export const dataParserPipeKind = createKind("data-parser-pipe");

type _DataParserPipe<
	GenericDefinition extends DataParserDefinitionPipe,
> = (
	& DataParser<
		GenericDefinition,
		Output<GenericDefinition["output"]>,
		Input<GenericDefinition["input"]>
	>
	& Kind<typeof dataParserPipeKind.definition>
);

export interface DataParserPipe<
	GenericDefinition extends DataParserDefinitionPipe = DataParserDefinitionPipe,
> extends _DataParserPipe<GenericDefinition> {

}

export function pipe<
	GenericInput extends DataParsers,
	GenericOutput extends DataParsers,
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
	return dataParserInit<DataParserPipe>(
		dataParserPipeKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				input,
				output,
			},
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
}
