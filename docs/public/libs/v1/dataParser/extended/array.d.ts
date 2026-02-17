import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";
type _DataParserArrayExtended<GenericDefinition extends dataParsers.DataParserDefinitionArray> = (Kind<typeof dataParsers.arrayKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserArray<GenericDefinition>>, Input<dataParsers.DataParserArray<GenericDefinition>>>);
export interface DataParserArrayExtended<GenericDefinition extends dataParsers.DataParserDefinitionArray = dataParsers.DataParserDefinitionArray> extends _DataParserArrayExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserArrayCheckers<Output<this>>,
        ...dataParsers.DataParserArrayCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserArrayCheckers<Output<this>>,
        ...dataParsers.DataParserArrayCheckers<Output<this>>[]
    ], GenericChecker>): DataParserArrayExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserArrayExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Adds a minimum length checker to an array parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.min(min, definition?)` -> returns an array parser
     * 
     * Ensures the array length is at least the given minimum.
     * 
     * ```ts
     * const parser = DPE.array(DPE.string()).min(2);
     * const result = parser.parse(["a", "b"]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string[]
     * }
     * 
     * const numbers = DPE.array(DPE.number()).min(1);
     * const numbersResult = numbers.parse([1]);
     * 
     * const nested = DPE.array(DPE.array(DPE.boolean())).min(1);
     * const nestedResult = nested.parse([[true]]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
     * 
     * @namespace DPE
     * 
     */
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">>): DataParserArrayExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerArrayMin]>>;
    /**
     * Adds a maximum length checker to an array parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.max(max, definition?)` -> returns an array parser
     * 
     * Ensures the array length is at most the given maximum.
     * 
     * ```ts
     * const parser = DPE.array(DPE.string()).max(2);
     * const result = parser.parse(["a", "b"]);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string[]
     * }
     * 
     * const numbers = DPE.array(DPE.number()).max(3);
     * const numbersResult = numbers.parse([1, 2, 3]);
     * 
     * const nested = DPE.array(DPE.array(DPE.boolean())).max(1);
     * const nestedResult = nested.parse([[true]]);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
     * 
     * @namespace DPE
     * 
     */
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">>): DataParserArrayExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerArrayMax]>>;
}
/**
 * Creates an extended data parser for arrays.
 * 
 * **Supported call styles:**
 * - Method: `DPE.array(element, definition?)` -> returns an array parser
 * 
 * Validates arrays and exposes array-specific methods like min and max.
 * 
 * ```ts
 * const parser = DPE.array(DPE.string()).min(1).max(3);
 * const result = parser.parse(["a", "b"]);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string[]
 * }
 * 
 * const numbers = DPE.array(DPE.number()).min(2);
 * const numbersResult = numbers.parse([1, 2, 3]);
 * 
 * const nested = DPE.array(DPE.array(DPE.boolean()));
 * const nestedResult = nested.parse([[true, false]]);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/array
 * 
 * @namespace DPE
 * 
 */
export declare function array<GenericElement extends DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionArray, "element">> = never>(element: GenericElement, definition?: GenericDefinition): DataParserArrayExtended<MergeDefinition<dataParsers.DataParserDefinitionArray, NeverCoalescing<GenericDefinition, {}> & {
    element: GenericElement;
}>>;
export declare namespace array {
    var overrideHandler: import("../../common").OverrideHandler<DataParserArrayExtended<dataParsers.DataParserDefinitionArray>>;
}
export {};
