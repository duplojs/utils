import { type Number } from "../../base";
/**
 * Checks whether a Number is strictly greater than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `greaterThan(value, threshold)` -> returns a boolean
 * - Curried: `greaterThan(threshold)` -> returns a function waiting for the value
 * 
 * Use it to compare wrapped numbers while keeping values in the Clean domain.
 * 
 * ```ts
 * const age = C.Number.createOrThrow(20);
 * 
 * C.greaterThan(age, 18); // true
 * 
 * if (C.greaterThan(age, 18)) {
 * 	// age is greater than 18
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/greaterThan
 * 
 * @namespace C
 * 
 */
export declare function greaterThan(threshold: Number | number): (value: Number) => boolean;
export declare function greaterThan(primitive: Number, threshold: Number | number): boolean;
