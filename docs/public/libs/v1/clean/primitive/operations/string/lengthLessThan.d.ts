import { type Number, type String } from "../../base";
/**
 * Checks whether a String length is less than a given value.
 * 
 * **Supported call styles:**
 * - Classic: `lengthLessThan(primitive, length)` -> returns a boolean
 * - Curried: `lengthLessThan(length)` -> returns a function waiting for the primitive
 * 
 * Use it to validate maximum sizes with wrapped Number values.
 * 
 * ```ts
 * const code = C.String.createOrThrow("AB");
 * 
 * C.lengthLessThan(code, 5); // true
 * 
 * if (C.lengthLessThan(code, 3)) {
 * 	// code has length less than 3
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/lengthLessThan
 * 
 * @namespace C
 * 
 */
export declare function lengthLessThan(length: Number | number): (primitive: String) => boolean;
export declare function lengthLessThan(primitive: String, length: Number | number): boolean;
