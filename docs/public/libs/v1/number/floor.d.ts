/**
 * Rounds a number down to the previous integer.
 * 
 * Signature: `floor(value)` → returns a number
 * 
 * @example
 * ```ts
 * N.floor(1.9); // 1
 * 
 * pipe(
 * 	1.9,
 * 	N.floor,
 * ); // 1
 * 
 * N.floor(2.0); // 2
 * 
 * N.floor(-1.2); // -2
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Math.floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/floor
 * 
 * @namespace N
 * 
 */
export declare function floor<GenericValue extends number>(value: GenericValue): number;
