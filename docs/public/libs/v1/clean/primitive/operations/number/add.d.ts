import { type Number } from "../../base";
/**
 * Adds two Number values (wrapped or raw) and returns a wrapped Number.
 * 
 * **Supported call styles:**
 * - Classic: `add(value, operand)` -> returns a Number
 * - Curried: `add(operand)` -> returns a function waiting for the value
 * 
 * Use it to keep numeric operations in the Clean domain while preserving types.
 * 
 * ```ts
 * const value = C.Number.createOrThrow(10);
 * 
 * const summed = C.add(value, 5);
 * // summed: C.Number
 * 
 * const curried = pipe(
 * 	value,
 * 	C.add(2),
 * );
 * // curried: C.Number
 * 
 * const combined = C.add(
 * 	C.Number.createOrThrow(4),
 * 	C.Number.createOrThrow(6),
 * );
 * // combined: C.Number
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/add
 * 
 * @namespace C
 * 
 */
export declare function add(operand: Number | number): (value: Number) => Number;
export declare function add(value: Number, operand: Number | number): Number;
