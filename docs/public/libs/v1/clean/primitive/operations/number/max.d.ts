import { type AnyTuple } from "../../../../common";
import { type Number } from "../../base";
/**
 * Returns the largest value from a tuple of Numbers.
 * 
 * **Supported call styles:**
 * - Classic: `max(input)` -> returns a Number
 * 
 * The input can mix wrapped Numbers and raw numbers.
 * 
 * ```ts
 * const largest = C.max([
 * 	C.Number.createOrThrow(3),
 * 	10,
 * 	1,
 * ]);
 * // largest: C.Number
 * 
 * const fromRaw = C.max([2, 8, 4]);
 * // fromRaw: C.Number
 * 
 * const mixed = C.max([
 * 	C.Number.createOrThrow(5),
 * 	C.Number.createOrThrow(2),
 * 	9,
 * ]);
 * // mixed: C.Number
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/max
 * 
 * @namespace C
 * 
 */
export declare function max(input: AnyTuple<Number | number>): Number;
