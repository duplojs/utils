import { type Number, type String } from "../../base";
/**
 * Checks whether a String length is greater than a given value.
 * 
 * **Supported call styles:**
 * - Classic: `lengthGreaterThan(primitive, length)` -> returns a boolean
 * - Curried: `lengthGreaterThan(length)` -> returns a function waiting for the primitive
 * 
 * Use it to validate minimum sizes with wrapped Number values.
 * 
 * ```ts
 * const label = C.String.createOrThrow("DuploJS");
 * 
 * C.lengthGreaterThan(label, 3); // true
 * 
 * if (C.lengthGreaterThan(label, 5)) {
 * 	// label has length greater than 5
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/lengthGreaterThan
 * 
 * @namespace C
 * 
 */
export declare function lengthGreaterThan(length: Number | number): (primitive: String) => boolean;
export declare function lengthGreaterThan(primitive: String, length: Number | number): boolean;
