import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserPipeCheckerCustom<GenericInput extends unknown = unknown> {
}
export type DataParserPipeCheckers<GenericInput extends unknown = unknown> = (DataParserPipeCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserPipeCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionPipe extends DataParserDefinition<DataParserPipeCheckers> {
    readonly input: DataParser;
    readonly output: DataParser;
}
export declare const pipeKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/pipe", unknown>>;
type _DataParserPipe<GenericDefinition extends DataParserDefinitionPipe> = (DataParser<GenericDefinition, Output<GenericDefinition["output"]>, Input<GenericDefinition["input"]>> & Kind<typeof pipeKind.definition>);
export interface DataParserPipe<GenericDefinition extends DataParserDefinitionPipe = DataParserDefinitionPipe> extends _DataParserPipe<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserPipeCheckers<Output<this>>,
        ...DataParserPipeCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserPipeCheckers<Output<this>>,
        ...DataParserPipeCheckers<Output<this>>[]
    ], GenericChecker>): DataParserPipe<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser pipeline from an input parser to an output parser.
 * 
 * **Supported call styles:**
 * - Classic: `DP.pipe(input, output, definition?)` -> returns a pipe parser
 * - Curried: not available
 * 
 * Runs the input parser, then feeds its output to the output parser.
 * 
 * ```ts
 * const schema = DP.pipe(
 * 	DP.coerce.number(),
 * 	DP.transform(
 * 		DP.number(),
 * 		(value) => value + 1,
 * 	),
 * );
 * 
 * const result = schema.parse("1234");
 * 
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/pipe
 * 
 * @namespace DP
 * 
 */
export declare function pipe<GenericInput extends DataParser, GenericOutput extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionPipe, "input" | "output">> = never>(input: GenericInput, output: GenericOutput, definition?: GenericDefinition): DataParserPipe<MergeDefinition<DataParserDefinitionPipe, NeverCoalescing<GenericDefinition, {}> & {
    input: GenericInput;
    output: GenericOutput;
}>>;
export declare namespace pipe {
    var overrideHandler: import("../../common").OverrideHandler<DataParserPipe<DataParserDefinitionPipe>>;
}
export {};
