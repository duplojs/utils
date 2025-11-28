import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output, type DataParser } from "../base";
type _DataParserPipeExtended<GenericDefinition extends dataParsers.DataParserDefinitionPipe> = (dataParsers.DataParserPipe<GenericDefinition> & DataParserExtended);
export interface DataParserPipeExtended<GenericDefinition extends dataParsers.DataParserDefinitionPipe = dataParsers.DataParserDefinitionPipe> extends _DataParserPipeExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserPipeCheckers<Output<this>>,
        ...dataParsers.DataParserPipeCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserPipeCheckers<Output<this>>,
        ...dataParsers.DataParserPipeCheckers<Output<this>>[]
    ], GenericChecker>): DataParserPipeExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserPipeExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function pipe<GenericInput extends DataParser, GenericOutput extends DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionPipe, "input" | "output">> = never>(input: GenericInput, output: GenericOutput, definition?: GenericDefinition): DataParserPipeExtended<MergeDefinition<dataParsers.DataParserDefinitionPipe, NeverCoalescing<GenericDefinition, {}> & {
    input: GenericInput;
    output: GenericOutput;
}>>;
export declare namespace pipe {
    var overrideHandler: import("../../common").OverrideHandler<DataParserPipeExtended<dataParsers.DataParserDefinitionPipe>>;
}
export {};
