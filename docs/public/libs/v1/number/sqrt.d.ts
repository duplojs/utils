/**
 * Returns the square root of a number.
 * 
 * Signature: `sqrt(value)` → returns a number
 * 
 * ```ts
 * N.sqrt(9); // 3
 * 
 * pipe(
 * 	9,
 * 	N.sqrt,
 * ); // 3
 * 
 * N.sqrt(2); // ~1.414
 * 
 * N.sqrt(0); // 0
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.sqrt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/sqrt
 * 
 * @namespace N
 * 
 */
export declare function sqrt<GenericValue extends number>(value: GenericValue): number;
