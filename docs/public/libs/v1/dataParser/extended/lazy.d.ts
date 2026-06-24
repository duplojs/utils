import { type FixDeepFunctionInfer, type Memoized, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserLazyExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserLazy>;
export declare class DataParserLazyExtended<GenericDefinition extends dataParsers.DataParserDefinitionLazy = dataParsers.DataParserDefinitionLazy> extends DataParserLazyExtended_base<GenericDefinition, Output<dataParsers.DataParserLazy<GenericDefinition>>, Input<dataParsers.DataParserLazy<GenericDefinition>>> {
    get classConstructor(): typeof DataParserLazyExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserLazyExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserLazyExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Creates an extended lazy data parser resolved at runtime.
     * 
     * **Supported call styles:**
     * - Method: `DPE.lazy(getter, definition?)` -> returns a lazy parser
     * 
     * Defers parser creation until execution, useful for recursive schemas.
     * 
     * ```ts
     * const parser = DPE.lazy(() => DPE.string());
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
     * const recursive: DPE.DataParserExtended<RecursiveSchema> = DPE.lazy(
     * 	() => DPE.object({
     * 		value: DPE.number(),
     * 		next: DPE.optional(recursive),
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
     * @namespace DPE
     * 
     */
    static create<GenericDataParser extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionLazy<Output<GenericDataParser>>, "getter"> = never>(getter: () => GenericDataParser, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionLazy<Output<GenericDataParser>>, "getter">, GenericDefinition>): DataParserLazyExtended<MergeDefinition<dataParsers.DataParserDefinitionLazy, NeverCoalescing<GenericDefinition, {}> & {
        getter: Memoized<GenericDataParser>;
    }>>;
}
/**
 * Creates an extended lazy data parser resolved at runtime.
 * 
 * **Supported call styles:**
 * - Method: `DPE.lazy(getter, definition?)` -> returns a lazy parser
 * 
 * Defers parser creation until execution, useful for recursive schemas.
 * 
 * ```ts
 * const parser = DPE.lazy(() => DPE.string());
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
 * const recursive: DPE.DataParserExtended<RecursiveSchema> = DPE.lazy(
 * 	() => DPE.object({
 * 		value: DPE.number(),
 * 		next: DPE.optional(recursive),
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
 * @namespace DPE
 * 
 */
export declare const lazy: typeof DataParserLazyExtended.create;
export {};
