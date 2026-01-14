import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";
type _DataParserPipeExtended<GenericDefinition extends dataParsers.DataParserDefinitionPipe> = (Kind<typeof dataParsers.pipeKind.definition> & DataParserExtended<GenericDefinition, Output<GenericDefinition["output"]>, Input<GenericDefinition["input"]>>);
export interface DataParserPipeExtended<GenericDefinition extends dataParsers.DataParserDefinitionPipe = dataParsers.DataParserDefinitionPipe> extends _DataParserPipeExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserPipeCheckers<Output<this>>,
        ...dataParsers.DataParserPipeCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserPipeCheckers<Output<this>>,
        ...dataParsers.DataParserPipeCheckers<Output<this>>[]
    ], GenericChecker>): DataParserPipeExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserPipeExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended pipe parser from two parsers.
 * 
 * **Supported call styles:**
 * - Method: `DPE.pipe(input, output, definition?)` -> returns a pipe parser
 * 
 * Runs the input parser, then feeds its output to the output parser.
 * 
 * ```ts
 * const parser = DPE.pipe(DPE.string(), DPE.coerce.number());
 * const result = parser.parse("42");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const toLength = DPE.pipe(DPE.string(), DPE.transform(DPE.string(), (value) => value.length));
 * const lengthResult = toLength.parse("Duplo");
 * 
 * const passThrough = DPE.pipe(DPE.number(), DPE.number());
 * const passResult = passThrough.parse(10);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/pipe
 * 
 * @namespace DPE
 * 
 */
export declare function pipe<GenericInput extends DataParser, GenericOutput extends DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionPipe, "input" | "output">> = never>(input: GenericInput, output: GenericOutput, definition?: GenericDefinition): DataParserPipeExtended<MergeDefinition<dataParsers.DataParserDefinitionPipe, NeverCoalescing<GenericDefinition, {}> & {
    input: GenericInput;
    output: GenericOutput;
}>>;
export declare namespace pipe {
    var overrideHandler: import("../../common").OverrideHandler<DataParserPipeExtended<dataParsers.DataParserDefinitionPipe>>;
}
export {};
