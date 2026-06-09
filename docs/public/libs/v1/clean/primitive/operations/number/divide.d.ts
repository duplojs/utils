import { type Number } from "../../base";
import { type NotZero } from "../../../../clean/constraint";
/**
 * Divides a Number by a non-zero divisor and returns a wrapped Number.
 * 
 * **Supported call styles:**
 * - Classic: `divide(value, divisor)` -> returns a Number
 * - Curried: `divide(divisor)` -> returns a function waiting for the value
 * 
 * Use it for domain arithmetic while keeping numbers wrapped. The divisor must be validated with the `NotZero` constraint before it is passed to `divide`.
 * 
 * ```ts
 * const value = C.Number.createOrThrow(12);
 * const divisor = C.NotZero.createOrThrow(3);
 * 
 * const ratio = C.divide(value, divisor);
 * // ratio: C.Number
 * 
 * const curried = pipe(
 * 	value,
 * 	C.divide(C.NotZero.createOrThrow(2)),
 * );
 * // curried: C.Number
 * 
 * const combined = C.divide(
 * 	C.Number.createOrThrow(20),
 * 	C.NotZero.createOrThrow(5),
 * );
 * // combined: C.Number
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/divide
 * 
 * @namespace C
 * 
 */
export declare function divide(divisor: NotZero): (value: Number) => Number;
export declare function divide(value: Number, divisor: NotZero): Number;
