import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError, SymbolDataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type DataParserTransformCheckers<GenericInput extends unknown = unknown> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionTransform<GenericOutput extends unknown = unknown> extends DataParserDefinition<DataParserTransformCheckers<GenericOutput>> {
    readonly inner: DataParser;
    theFunction(input: any, error: DataParserError): GenericOutput;
}
export declare const transformKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/transform", unknown>>;
export type DataParserTransformOutput<GenericTheFunction extends DataParserDefinitionTransform["theFunction"]> = Exclude<Awaited<ReturnType<GenericTheFunction>>, typeof SymbolDataParserError>;
declare const DataParserTransform_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/transform", unknown>>>;
export declare class DataParserTransform<GenericDefinition extends DataParserDefinitionTransform = DataParserDefinitionTransform> extends DataParserTransform_base<GenericDefinition, DataParserTransformOutput<GenericDefinition["theFunction"]>, Input<GenericDefinition["inner"]>> {
    get classConstructor(): typeof DataParserTransform & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserTransform<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserTransform, data: unknown, error: DataParserError): unknown;
    static dataParserIsAsynchronous(self: DataParserTransform): boolean;
    static prepareDefinition(inner: DataParser, theFunction: (input: unknown, error: DataParserError) => unknown, definition?: Partial<Omit<DataParserDefinitionTransform, "inner" | "theFunction">>): DataParserDefinitionTransform;
    /**
     * Creates a data parser that transforms the output of another parser.
     * 
     * **Supported call styles:**
     * - Classic: `DP.transform(inner, theFunction, definition?)` -> returns a transform parser
     * - Curried: not available
     * 
     * Runs the inner parser and applies a transformation function to its output.
     * 
     * ```ts
     * const parser = DP.transform(DP.string(), (value) => value.length);
     * const result = parser.parse("Duplo");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const toUpper = DP.transform(
     * 	DP.string(),
     * 	S.toUpperCase,
     * );
     * const upperResult = toUpper.parse("duplo");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/transform
     * 
     * @namespace DP
     * 
     */
    static create<GenericDataParser extends DataParser, GenericOutput extends unknown, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionTransform<DataParserTransformOutput<() => GenericOutput>>, "inner" | "theFunction"> = never>(inner: GenericDataParser, theFunction: (input: Output<GenericDataParser>, error: DataParserError) => GenericOutput, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionTransform<DataParserTransformOutput<() => GenericOutput>>, "inner" | "theFunction">, GenericDefinition>): DataParserTransform<MergeDefinition<DataParserDefinitionTransform, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericDataParser;
        theFunction(input: Output<GenericDataParser>, error: DataParserError): GenericOutput;
    }>>;
}
/**
 * Creates a data parser that transforms the output of another parser.
 * 
 * **Supported call styles:**
 * - Classic: `DP.transform(inner, theFunction, definition?)` -> returns a transform parser
 * - Curried: not available
 * 
 * Runs the inner parser and applies a transformation function to its output.
 * 
 * ```ts
 * const parser = DP.transform(DP.string(), (value) => value.length);
 * const result = parser.parse("Duplo");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const toUpper = DP.transform(
 * 	DP.string(),
 * 	S.toUpperCase,
 * );
 * const upperResult = toUpper.parse("duplo");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/transform
 * 
 * @namespace DP
 * 
 */
export declare const transform: typeof DataParserTransform.create;
export {};
