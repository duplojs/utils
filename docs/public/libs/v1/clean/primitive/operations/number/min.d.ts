import { type AnyTuple } from "../../../../common";
import { type Number } from "../../base";
/**
 * Returns the smallest value from a tuple of Numbers.
 * 
 * **Supported call styles:**
 * - Classic: `min(input)` -> returns a Number
 * 
 * The input can mix wrapped Numbers and raw numbers.
 * 
 * ```ts
 * const smallest = C.min([
 * 	C.Number.createOrThrow(3),
 * 	10,
 * 	1,
 * ]);
 * // smallest: C.Number
 * 
 * const fromRaw = C.min([2, 8, 4]);
 * // fromRaw: C.Number
 * 
 * const mixed = C.min([
 * 	C.Number.createOrThrow(5),
 * 	C.Number.createOrThrow(2),
 * 	9,
 * ]);
 * // mixed: C.Number
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/min
 * 
 * @namespace C
 * 
 */
export declare function min(input: AnyTuple<Number | number>): Number;
