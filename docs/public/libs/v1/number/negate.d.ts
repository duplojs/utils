/**
 * Negates a number.
 * 
 * Signature: `negate(value)` → returns a number
 * 
 * @example
 * ```ts
 * N.negate(5); // -5
 * 
 * pipe(
 * 	-3,
 * 	N.negate,
 * ); // 3
 * 
 * N.negate(0); // 0
 * 
 * ```
 * 
 * @remarks
 * - Equivalent to multiplying the number by `-1`
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/negate
 * 
 * @namespace N
 * 
 */
export declare function negate<GenericValue extends number>(value: GenericValue): number;
