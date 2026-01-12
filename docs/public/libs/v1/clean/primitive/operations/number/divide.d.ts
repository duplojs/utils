import { type Number } from "../../base";
/**
 * Divides a Number by a divisor and returns a wrapped Number.
 * 
 * **Supported call styles:**
 * - Classic: `divide(value, divisor)` -> returns a Number
 * - Curried: `divide(divisor)` -> returns a function waiting for the value
 * 
 * Use it for domain arithmetic while keeping numbers wrapped.
 * 
 * ```ts
 * const value = C.Number.createOrThrow(12);
 * 
 * const ratio = C.divide(value, 3);
 * // ratio: C.Number
 * 
 * const curried = pipe(
 * 	value,
 * 	C.divide(2),
 * );
 * // curried: C.Number
 * 
 * const combined = C.divide(
 * 	C.Number.createOrThrow(20),
 * 	C.Number.createOrThrow(5),
 * );
 * // combined: C.Number
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/divide
 * 
 * @namespace C
 * 
 */
export declare function divide(divisor: Number | number): (value: Number) => Number;
export declare function divide(value: Number, divisor: Number | number): Number;
