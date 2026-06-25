import { type FixDeepFunctionInfer, type Memoized, type NeverCoalescing } from "../../common";
import { type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type ApplyRefinementOfDefinition, type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
export type DataParserLazyCheckers<GenericInput extends unknown = unknown> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionLazy<GenericInput extends unknown = unknown> extends DataParserDefinition<DataParserLazyCheckers<GenericInput>> {
    getter: Memoized<DataParser>;
}
export declare const lazyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/lazy", unknown>>;
declare const DataParserLazy_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/lazy", unknown>>>;
export declare class DataParserLazy<GenericDefinition extends DataParserDefinitionLazy = DataParserDefinitionLazy> extends DataParserLazy_base<GenericDefinition, ApplyRefinementOfDefinition<Output<GenericDefinition["getter"]["value"]>, GenericDefinition>, ApplyRefinementOfDefinition<Input<GenericDefinition["getter"]["value"]>, GenericDefinition>> {
    get classConstructor(): typeof DataParserLazy & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserLazy<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserLazy, data: unknown, error: DataParserError): unknown;
    static dataParserIsAsynchronous(self: DataParserLazy): boolean;
    static prepareDefinition(getter: () => DataParser, definition?: Partial<Omit<DataParserDefinitionLazy, "getter">>): DataParserDefinitionLazy;
    /**
     * Creates a lazy data parser resolved at runtime.
     * 
     * **Supported call styles:**
     * - Classic: `DP.lazy(getter, definition?)` -> returns a lazy parser
     * - Curried: not available
     * 
     * Defers parser creation until execution, useful for recursive schemas.
     * 
     * ```ts
     * const parser = DP.lazy(() => DP.string());
     * const result = parser.parse("lazy");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string
     * }
     * 
     * interface RecursiveSchema {
     * 	value: number;
     * 	next?: RecursiveSchema;
     * }
     * 
     * const recursive: DP.DataParser<RecursiveSchema> = DP.lazy(
     * 	() => DP.object({
     * 		value: DP.number(),
     * 		next: DP.optional(recursive),
     * 	}),
     * );
     * const recursiveResult = recursive.parse({
     * 	value: 1,
     * 	next: { value: 2 },
     * });
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/lazy
     * 
     * @namespace DP
     * 
     */
    static create<GenericDataParser extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionLazy<Output<GenericDataParser>>, "getter"> = never>(getter: () => GenericDataParser, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionLazy<Output<GenericDataParser>>, "getter">, GenericDefinition>): DataParserLazy<MergeDefinition<DataParserDefinitionLazy, NeverCoalescing<GenericDefinition, {}> & {
        getter: Memoized<GenericDataParser>;
    }>>;
}
/**
 * Creates a lazy data parser resolved at runtime.
 * 
 * **Supported call styles:**
 * - Classic: `DP.lazy(getter, definition?)` -> returns a lazy parser
 * - Curried: not available
 * 
 * Defers parser creation until execution, useful for recursive schemas.
 * 
 * ```ts
 * const parser = DP.lazy(() => DP.string());
 * const result = parser.parse("lazy");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string
 * }
 * 
 * interface RecursiveSchema {
 * 	value: number;
 * 	next?: RecursiveSchema;
 * }
 * 
 * const recursive: DP.DataParser<RecursiveSchema> = DP.lazy(
 * 	() => DP.object({
 * 		value: DP.number(),
 * 		next: DP.optional(recursive),
 * 	}),
 * );
 * const recursiveResult = recursive.parse({
 * 	value: 1,
 * 	next: { value: 2 },
 * });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/lazy
 * 
 * @namespace DP
 * 
 */
export declare const lazy: typeof DataParserLazy.create;
export {};
