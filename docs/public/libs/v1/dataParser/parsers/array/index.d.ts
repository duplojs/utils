import { type FixDeepFunctionInfer, type MaybePromise, type NeverCoalescing } from "../../../common";
import { type DataParser, type DataParserDefinition } from "../../base";
import { type DataParserError, SymbolDataParserError } from "../../../dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type ApplyRefinementOfDefinition, type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
export * from "./checkers";
export type DataParserArrayCheckers<GenericInput extends unknown[] = unknown[]> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionArray<GenericInput extends unknown[] = unknown[]> extends DataParserDefinition<DataParserArrayCheckers<GenericInput>> {
    readonly element: DataParser;
}
export declare const arrayKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/array", unknown>>;
declare const DataParserArray_base: import("../..").DataParserBaseInit<import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/array", unknown>>>;
export declare class DataParserArray<GenericDefinition extends DataParserDefinitionArray = DataParserDefinitionArray> extends DataParserArray_base<GenericDefinition, ApplyRefinementOfDefinition<Output<GenericDefinition["element"]>[], GenericDefinition>, ApplyRefinementOfDefinition<Input<GenericDefinition["element"]>[], GenericDefinition>> {
    get classConstructor(): typeof DataParserArray & import("../..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserArray<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserArray, data: unknown, error: DataParserError): MaybePromise<SymbolDataParserError | unknown[]>;
    static dataParserIsAsynchronous(self: DataParserArray): boolean;
    static prepareDefinition(element: DataParser, definition?: Partial<Omit<DataParserDefinitionArray, "element">>): DataParserDefinitionArray;
    /**
     * Creates a data parser for arrays of a given element parser.
     * 
     * **Supported call styles:**
     * - Classic: `DP.array(element, definition?)` -> returns an array parser
     * - Curried: not available
     * 
     * Validates that the input is an array and validates each element with the provided parser.
     * 
     * ```ts
     * const parser = DP.array(DP.string());
     * const result = parser.parse(["a", "b"]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string[]
     * }
     * 
     * const withCheckers = DP.array(DP.number(), {
     * 	checkers: [DP.checkerArrayMin(1), DP.checkerArrayMax(3)],
     * });
     * 
     * const nested = DP.array(DP.array(DP.boolean()));
     * const nestedResult = nested.parse([[true, false]]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
     * 
     * @namespace DP
     * 
     */
    static create<GenericElement extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionArray<Output<GenericElement>[]>, "element"> = never>(element: GenericElement, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionArray<Output<GenericElement>[]>, "element">, GenericDefinition>): DataParserArray<MergeDefinition<DataParserDefinitionArray, NeverCoalescing<GenericDefinition, {}> & {
        readonly element: GenericElement;
    }>>;
}
/**
 * Creates a data parser for arrays of a given element parser.
 * 
 * **Supported call styles:**
 * - Classic: `DP.array(element, definition?)` -> returns an array parser
 * - Curried: not available
 * 
 * Validates that the input is an array and validates each element with the provided parser.
 * 
 * ```ts
 * const parser = DP.array(DP.string());
 * const result = parser.parse(["a", "b"]);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string[]
 * }
 * 
 * const withCheckers = DP.array(DP.number(), {
 * 	checkers: [DP.checkerArrayMin(1), DP.checkerArrayMax(3)],
 * });
 * 
 * const nested = DP.array(DP.array(DP.boolean()));
 * const nestedResult = nested.parse([[true, false]]);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
 * 
 * @namespace DP
 * 
 */
export declare const array: typeof DataParserArray.create;
