/**
 * Rounds a number to the nearest integer.
 * 
 * Signature: `round(value)` → returns a number
 * 
 * @example
 * ```ts
 * N.round(1.4); // 1
 * 
 * pipe(
 * 	1.4,
 * 	N.round,
 * ); // 1
 * 
 * N.round(1.5); // 2
 * 
 * N.round(-1.6); // -2
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.round`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/round
 * 
 * @namespace N
 * 
 */
export declare function round<GenericValue extends number>(value: GenericValue): number;
