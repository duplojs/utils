/**
 * Removes the fractional part of a number.
 * 
 * Signature: `trunc(value)` → returns a number
 * 
 * ```ts
 * N.trunc(1.9); // 1
 * 
 * pipe(
 * 	1.9,
 * 	N.trunc,
 * ); // 1
 * 
 * N.trunc(-1.9); // -1
 * 
 * N.trunc(2.0); // 2
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.trunc`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/trunc
 * 
 * @namespace N
 * 
 */
export declare function trunc<GenericValue extends number>(value: GenericValue): number;
