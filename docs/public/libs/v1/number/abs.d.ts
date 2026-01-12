/**
 * Returns the absolute value of a number.
 * 
 * Signature: `abs(value)` → returns a number
 * 
 * ```ts
 * N.abs(-5); // 5
 * 
 * pipe(
 * 	-5,
 * 	N.abs,
 * ); // 5
 * 
 * N.abs(0); // 0
 * 
 * N.abs(3); // 3
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.abs`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/abs
 * 
 * @namespace N
 * 
 */
export declare function abs<GenericValue extends number>(value: GenericValue): number;
