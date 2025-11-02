import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type MergeDefinition } from "../../dataParser/types";
export interface DataParserDefinitionPipe extends DataParserDefinition<never> {
    readonly input: DataParser;
    readonly output: DataParser;
}
export declare const pipeKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/pipe", unknown>>;
type _DataParserPipe<GenericDefinition extends DataParserDefinitionPipe> = (DataParser<GenericDefinition, Output<GenericDefinition["output"]>, Input<GenericDefinition["input"]>> & Kind<typeof pipeKind.definition>);
export interface DataParserPipe<GenericDefinition extends DataParserDefinitionPipe = DataParserDefinitionPipe> extends _DataParserPipe<GenericDefinition> {
}
export declare function pipe<GenericInput extends DataParser, GenericOutput extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionPipe, "input" | "output">> = never>(input: GenericInput, output: GenericOutput, definition?: GenericDefinition): DataParserPipe<MergeDefinition<DataParserDefinitionPipe, NeverCoalescing<GenericDefinition, {}> & {
    input: GenericInput;
    output: GenericOutput;
}>>;
export {};
