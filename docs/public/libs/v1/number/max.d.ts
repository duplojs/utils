import { type AnyTuple } from "../common";
/**
 * Returns the largest value in a number tuple.
 * 
 * Signature: `max(tuple)` → returns a number
 * 
 * ```ts
 * N.max([1, 5, 2]); // 5
 * 
 * pipe(
 * 	<const>[-1, -3],
 * 	N.max,
 * ); // -1
 * 
 * N.max([0]); // 0
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.max`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
 * 
 * @see [`N.min`](https://utils.duplojs.dev/en/v1/api/number/min) For the minimum value
 * @see https://utils.duplojs.dev/en/v1/api/number/max
 * 
 * @namespace N
 * 
 */
export declare function max<GenericInput extends AnyTuple<number>>(input: GenericInput): number;
