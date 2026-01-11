import { type Kind, type Memoized, type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";
type _DataParserLazyExtended<GenericDefinition extends dataParsers.DataParserDefinitionLazy> = (Kind<typeof dataParsers.lazyKind.definition> & DataParserExtended<GenericDefinition, Output<GenericDefinition["getter"]["value"]>, Input<GenericDefinition["getter"]["value"]>>);
export interface DataParserLazyExtended<GenericDefinition extends dataParsers.DataParserDefinitionLazy = dataParsers.DataParserDefinitionLazy> extends _DataParserLazyExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserLazyCheckers<Output<this>>,
        ...dataParsers.DataParserLazyCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserLazyCheckers<Output<this>>,
        ...dataParsers.DataParserLazyCheckers<Output<this>>[]
    ], GenericChecker>): DataParserLazyExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionLazy>(definition: GenericDefinition): DataParserLazyExtended<MergeDefinition<dataParsers.DataParserDefinitionLazy, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserLazyExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
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
 * const recursive: DPE.Contract<RecursiveSchema> = DPE.lazy(
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
export declare function lazy<GenericDataParser extends DataParser, const GenericDefinition extends Partial<dataParsers.DataParserDefinitionLazy> = never>(getter: () => GenericDataParser, definition?: GenericDefinition): DataParserLazyExtended<MergeDefinition<dataParsers.DataParserDefinitionLazy, NeverCoalescing<GenericDefinition, {}> & {
    getter: Memoized<GenericDataParser>;
}>>;
export declare namespace lazy {
    var overrideHandler: import("../../common").OverrideHandler<DataParserLazyExtended<dataParsers.DataParserDefinitionLazy>>;
}
export {};
