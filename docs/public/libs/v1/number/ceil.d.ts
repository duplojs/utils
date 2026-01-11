/**
 * Rounds a number up to the next integer.
 * 
 * Signature: `ceil(value)` → returns a number
 * 
 * ```ts
 * N.ceil(1.2); // 2
 * 
 * pipe(
 * 	1.2,
 * 	N.ceil,
 * ); // 2
 * 
 * N.ceil(2.0); // 2
 * 
 * N.ceil(-1.2); // -1
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.ceil`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/ceil
 * 
 * @namespace N
 * 
 */
export declare function ceil<GenericValue extends number>(value: GenericValue): number;
