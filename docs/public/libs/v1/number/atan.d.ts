/**
 * Returns the arctangent (in radians) of a number.
 * 
 * Signature: `atan(value)` → returns a number
 * 
 * ```ts
 * N.atan(0); // 0
 * 
 * pipe(
 * 	0,
 * 	N.atan,
 * ); // 0
 * 
 * N.atan(1); // ~0.785
 * 
 * N.atan(-1); // ~-0.785
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.atan`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/atan
 * 
 * @namespace N
 * 
 */
export declare function atan<GenericValue extends number>(value: GenericValue): number;
