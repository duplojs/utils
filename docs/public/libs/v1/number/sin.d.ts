/**
 * Returns the sine of a number (in radians).
 * 
 * Signature: `sin(value)` → returns a number
 * 
 * ```ts
 * N.sin(0); // 0
 * 
 * pipe(
 * 	0,
 * 	N.sin,
 * ); // 0
 * 
 * N.sin(Math.PI / 2); // 1
 * 
 * N.sin(Math.PI); // ~0
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.sin`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/sin
 * 
 * @namespace N
 * 
 */
export declare function sin<GenericValue extends number>(value: GenericValue): number;
