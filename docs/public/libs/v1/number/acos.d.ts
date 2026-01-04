/**
 * Returns the arccosine (in radians) of a number.
 * 
 * Signature: `acos(value)` → returns a number
 * 
 * ```ts
 * N.acos(1); // 0
 * 
 * pipe(
 * 	1,
 * 	N.acos,
 * ); // 0
 * 
 * N.acos(0); // ~1.571
 * 
 * N.acos(-1); // ~3.142
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.acos`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/acos
 * 
 * @namespace N
 * 
 */
export declare function acos<GenericValue extends number>(value: GenericValue): number;
