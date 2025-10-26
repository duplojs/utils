import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type DataParsers, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserPipeExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionPipe,
> = (
	& dataParsers.DataParserPipe<GenericDefinition>
	& DataParserExtended
);

export interface DataParserPipeExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionPipe = dataParsers.DataParserDefinitionPipe,
> extends _DataParserPipeExtended<GenericDefinition> {

}

export function pipe<
	GenericInput extends DataParsers,
	GenericOutput extends DataParsers,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionPipe, "input" | "output">
	> = never,
>(
	input: GenericInput,
	output: GenericOutput,
	definition?: GenericDefinition,
): DataParserPipeExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionPipe,
			NeverCoalescing<GenericDefinition, {}> & {
				input: GenericInput;
				output: GenericOutput;
			}
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserPipe,
		DataParserPipeExtended
	>(
		dataParsers.pipe(input, output, definition),
		{},
	) as never;
}
