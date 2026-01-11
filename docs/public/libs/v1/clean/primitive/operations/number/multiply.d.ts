import { type Number } from "../../base";
/**
 * Multiplies a Number by a factor and returns a wrapped Number.
 * 
 * **Supported call styles:**
 * - Classic: `multiply(value, multiplier)` -> returns a Number
 * - Curried: `multiply(multiplier)` -> returns a function waiting for the value
 * 
 * Use it for domain arithmetic while keeping numbers wrapped.
 * 
 * ```ts
 * const value = C.Number.createOrThrow(4);
 * 
 * const scaled = C.multiply(value, 3);
 * // scaled: C.Number
 * 
 * const curried = pipe(
 * 	value,
 * 	C.multiply(2),
 * );
 * // curried: C.Number
 * 
 * const combined = C.multiply(
 * 	C.Number.createOrThrow(5),
 * 	C.Number.createOrThrow(6),
 * );
 * // combined: C.Number
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/multiply
 * 
 * @namespace C
 * 
 */
export declare function multiply(multiplier: Number | number): (value: Number) => Number;
export declare function multiply(value: Number, multiplier: Number | number): Number;
