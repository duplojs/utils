import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserNumberExtended<GenericDefinition extends dataParsers.DataParserDefinitionNumber> = (Kind<typeof dataParsers.numberKind.definition> & DataParserExtended<GenericDefinition, number, number>);
export interface DataParserNumberExtended<GenericDefinition extends dataParsers.DataParserDefinitionNumber = dataParsers.DataParserDefinitionNumber> extends _DataParserNumberExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserNumberCheckers,
        ...dataParsers.DataParserNumberCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserNumberCheckers,
        ...dataParsers.DataParserNumberCheckers[]
    ], GenericChecker>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Adds a minimum value checker to a number parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.min(min, definition?)` -> returns a number parser
     * 
     * Ensures the number is at least the given minimum.
     * 
     * ```ts
     * const parser = DPE.number().min(0);
     * const result = parser.parse(3);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const withMessage = DPE.number().min(10, { errorMessage: "number.too-small" });
     * const messageResult = withMessage.parse(10);
     * 
     * const chained = DPE.number().min(1).max(5);
     * const chainedResult = chained.parse(3);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/number
     * 
     * @namespace DPE
     * 
     */
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionNumberMin, "min">>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerNumberMin]>>;
    /**
     * Adds a maximum value checker to a number parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.max(max, definition?)` -> returns a number parser
     * 
     * Ensures the number is at most the given maximum.
     * 
     * ```ts
     * const parser = DPE.number().max(10);
     * const result = parser.parse(5);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const withMessage = DPE.number().max(100, { errorMessage: "number.too-large" });
     * const messageResult = withMessage.parse(100);
     * 
     * const chained = DPE.number().min(1).max(5);
     * const chainedResult = chained.parse(2);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/number
     * 
     * @namespace DPE
     * 
     */
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionNumberMax, "max">>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerNumberMax]>>;
    /**
     * Adds an integer checker to a number parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.int(definition?)` -> returns a number parser
     * 
     * Ensures the number is an integer.
     * 
     * ```ts
     * const parser = DPE.number().int();
     * const result = parser.parse(4);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: number
     * }
     * 
     * const withMessage = DPE.number().int({ errorMessage: "number.not-int" });
     * const messageResult = withMessage.parse(10);
     * 
     * const chained = DPE.number().min(0).int();
     * const chainedResult = chained.parse(3);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/number
     * 
     * @namespace DPE
     * 
     */
    int(definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerInt]>>;
}
/**
 * Creates an extended data parser for numbers.
 * 
 * **Supported call styles:**
 * - Method: `DPE.number(definition?)` -> returns a number parser
 * 
 * Validates numbers and exposes number-specific methods like min, max, and int.
 * 
 * ```ts
 * const parser = DPE.number()
 * 	.min(0)
 * 	.max(10)
 * 	.int();
 * const result = parser.parse(5);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const coerceParser = DPE.coerce.number();
 * const coerceResult = coerceParser.parse("42");
 * 
 * const intOnly = DPE.number().int();
 * const intResult = intOnly.parse(3);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/number
 * 
 * @namespace DPE
 * 
 */
export declare function number<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionNumber> = never>(definition?: GenericDefinition): DataParserNumberExtended<MergeDefinition<dataParsers.DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace number {
    var overrideHandler: import("../../common").OverrideHandler<DataParserNumberExtended<dataParsers.DataParserDefinitionNumber>>;
}
/**
 * Creates an extended data parser for integers.
 * 
 * **Supported call styles:**
 * - Method: `DPE.int(definition?)` -> returns an int parser
 * 
 * Validates that the input is an integer number.
 * 
 * ```ts
 * const parser = DPE.int();
 * const result = parser.parse(10);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const withMessage = DPE.int({ errorMessage: "number.not-int" });
 * const messageResult = withMessage.parse(5);
 * 
 * const withRange = DPE.int().min(0).max(10);
 * const rangeResult = withRange.parse(3);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/number
 * 
 * @namespace DPE
 * 
 */
export declare function int(definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>): DataParserNumberExtended<{
    readonly checkers: readonly [dataParsers.DataParserCheckerInt];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
