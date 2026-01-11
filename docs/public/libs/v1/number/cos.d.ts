/**
 * Returns the cosine of a number (in radians).
 * 
 * Signature: `cos(value)` → returns a number
 * 
 * ```ts
 * N.cos(0); // 1
 * 
 * pipe(
 * 	0,
 * 	N.cos,
 * ); // 1
 * 
 * N.cos(Math.PI / 2); // ~0
 * 
 * N.cos(Math.PI); // -1
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.cos`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/cos
 * 
 * @namespace N
 * 
 */
export declare function cos<GenericValue extends number>(value: GenericValue): number;
