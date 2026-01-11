import { type Number } from "../../base";
/**
 * Checks whether a Number is strictly less than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `lessThan(value, threshold)` -> returns a boolean
 * - Curried: `lessThan(threshold)` -> returns a function waiting for the value
 * 
 * Use it to compare wrapped numbers while keeping values in the Clean domain.
 * 
 * ```ts
 * const speed = C.Number.createOrThrow(30);
 * 
 * C.lessThan(speed, 50); // true
 * 
 * if (C.lessThan(speed, 40)) {
 * 	// speed is less than 40
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/lessThan
 * 
 * @namespace C
 * 
 */
export declare function lessThan(threshold: Number | number): (value: Number) => boolean;
export declare function lessThan(primitive: Number, threshold: Number | number): boolean;
