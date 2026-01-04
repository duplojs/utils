import { type AnyTuple } from "../common";
/**
 * Returns the smallest value in a number tuple.
 * 
 * Signature: `min(tuple)` → returns a number
 * 
 * @example
 * ```ts
 * N.min([1, 5, 2]); // 1
 * 
 * pipe(
 * 	<const>[-1, -3],
 * 	N.min,
 * ); // -3
 * 
 * N.min([0]); // 0
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.min`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
 * 
 * @see [`N.max`](https://utils.duplojs.dev/en/v1/api/number/max) For the maximum value
 * @see https://utils.duplojs.dev/en/v1/api/number/min
 * 
 * @namespace N
 * 
 */
export declare function min<GenericInput extends AnyTuple<number>>(input: GenericInput): number;
