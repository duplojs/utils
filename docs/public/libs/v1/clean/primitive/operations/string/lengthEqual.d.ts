import { type Number, type String } from "../../base";
/**
 * Checks whether a String length equals a given value.
 * 
 * **Supported call styles:**
 * - Classic: `lengthEqual(primitive, length)` -> returns a boolean
 * - Curried: `lengthEqual(length)` -> returns a function waiting for the primitive
 * 
 * Use it to validate string sizes with wrapped Number values.
 * 
 * ```ts
 * const token = C.String.createOrThrow("abcd");
 * 
 * C.lengthEqual(token, 4); // true
 * 
 * if (C.lengthEqual(token, 4)) {
 * 	// token has length 4
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/lengthEqual
 * 
 * @namespace C
 * 
 */
export declare function lengthEqual(length: Number | number): (primitive: String) => boolean;
export declare function lengthEqual(primitive: String, length: Number | number): boolean;
