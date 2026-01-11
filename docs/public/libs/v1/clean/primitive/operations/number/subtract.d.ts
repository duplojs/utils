import { type Number } from "../../base";
/**
 * Subtracts a value from a Number and returns a wrapped Number.
 * 
 * **Supported call styles:**
 * - Classic: `subtract(value, subtrahend)` -> returns a Number
 * - Curried: `subtract(subtrahend)` -> returns a function waiting for the value
 * 
 * Use it for domain arithmetic while keeping numbers wrapped.
 * 
 * ```ts
 * const value = C.Number.createOrThrow(10);
 * 
 * const reduced = C.subtract(value, 3);
 * // reduced: C.Number
 * 
 * const curried = pipe(
 * 	value,
 * 	C.subtract(2),
 * );
 * // curried: C.Number
 * 
 * const combined = C.subtract(
 * 	C.Number.createOrThrow(8),
 * 	C.Number.createOrThrow(5),
 * );
 * // combined: C.Number
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/subtract
 * 
 * @namespace C
 * 
 */
export declare function subtract(subtrahend: Number | number): (value: Number) => Number;
export declare function subtract(value: Number, subtrahend: Number | number): Number;
