import { DataParserArrayExtended } from "./base";
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
export declare const array: typeof DataParserArrayExtended.create;
