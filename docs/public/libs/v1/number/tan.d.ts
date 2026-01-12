/**
 * Returns the tangent of a number (in radians).
 * 
 * Signature: `tan(value)` → returns a number
 * 
 * ```ts
 * N.tan(0); // 0
 * 
 * pipe(
 * 	0,
 * 	N.tan,
 * ); // 0
 * 
 * N.tan(Math.PI / 4); // 1
 * 
 * N.tan(1); // ~1.557
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.tan`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/tan
 * 
 * @namespace N
 * 
 */
export declare function tan<GenericValue extends number>(value: GenericValue): number;
