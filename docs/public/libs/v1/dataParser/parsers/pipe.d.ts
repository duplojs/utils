import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type DataParserPipeCheckers<GenericInput extends unknown = unknown> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionPipe<GenericInput extends unknown = unknown> extends DataParserDefinition<DataParserPipeCheckers<GenericInput>> {
    readonly input: DataParser;
    readonly output: DataParser;
}
export declare const pipeKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/pipe", unknown>>;
declare const DataParserPipe_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/pipe", unknown>>>;
export declare class DataParserPipe<GenericDefinition extends DataParserDefinitionPipe = DataParserDefinitionPipe> extends DataParserPipe_base<GenericDefinition, Output<GenericDefinition["output"]>, Input<GenericDefinition["input"]>> {
    get classConstructor(): typeof DataParserPipe & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserPipe<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserPipe, data: unknown, error: DataParserError): unknown;
    static dataParserIsAsynchronous(self: DataParserPipe): boolean;
    static prepareDefinition(input: DataParser, output: DataParser, definition?: Partial<Omit<DataParserDefinitionPipe, "input" | "output">>): DataParserDefinitionPipe;
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
    static create<GenericInput extends DataParser, GenericOutput extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionPipe<Output<GenericOutput>>, "input" | "output"> = never>(input: GenericInput, output: GenericOutput, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionPipe<Output<GenericOutput>>, "input" | "output">, GenericDefinition>): DataParserPipe<MergeDefinition<DataParserDefinitionPipe, NeverCoalescing<GenericDefinition, {}> & {
        input: GenericInput;
        output: GenericOutput;
    }>>;
}
export declare const pipe: typeof DataParserPipe.create;
export {};
