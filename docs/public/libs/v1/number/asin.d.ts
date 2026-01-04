/**
 * Returns the arcsine (in radians) of a number.
 * 
 * Signature: `asin(value)` → returns a number
 * 
 * @example
 * ```ts
 * N.asin(0); // 0
 * 
 * pipe(
 * 	0,
 * 	N.asin,
 * ); // 0
 * 
 * N.asin(1); // ~1.571
 * 
 * N.asin(-1); // ~-1.571
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.asin`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/asin
 * 
 * @namespace N
 * 
 */
export declare function asin<GenericValue extends number>(value: GenericValue): number;
