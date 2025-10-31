import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type DataParsers, type MergeDefinition } from "../types";
export interface DataParserDefinitionPipe extends DataParserDefinition<never> {
    readonly input: DataParsers;
    readonly output: DataParsers;
}
export declare const dataParserPipeKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/pipe", unknown>>;
type _DataParserPipe<GenericDefinition extends DataParserDefinitionPipe> = (DataParser<GenericDefinition, Output<GenericDefinition["output"]>, Input<GenericDefinition["input"]>> & Kind<typeof dataParserPipeKind.definition>);
export interface DataParserPipe<GenericDefinition extends DataParserDefinitionPipe = DataParserDefinitionPipe> extends _DataParserPipe<GenericDefinition> {
}
export declare function pipe<GenericInput extends DataParsers, GenericOutput extends DataParsers, const GenericDefinition extends Partial<Omit<DataParserDefinitionPipe, "input" | "output">> = never>(input: GenericInput, output: GenericOutput, definition?: GenericDefinition): DataParserPipe<MergeDefinition<DataParserDefinitionPipe, NeverCoalescing<GenericDefinition, {}> & {
    input: GenericInput;
    output: GenericOutput;
}>>;
export {};
