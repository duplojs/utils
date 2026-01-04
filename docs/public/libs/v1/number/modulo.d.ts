/**
 * Computes the remainder of a division.
 * 
 * **Supported call styles:**
 * - Classic: `modulo(value, operand)` → returns a number
 * - Curried: `modulo(operand)` → returns a function waiting for the value
 * 
 * @example
 * ```ts
 * N.modulo(
 * 	10,
 * 	3,
 * ); // 1
 * 
 * pipe(
 * 	10,
 * 	N.modulo(4),
 * ); // 2
 * 
 * N.modulo(
 * 	7,
 * 	2,
 * ); // 1
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/modulo
 * 
 * @namespace N
 * 
 */
export declare function modulo<GenericValue extends number>(divisor: number): (value: GenericValue) => number;
export declare function modulo<GenericValue extends number>(value: GenericValue, divisor: number): number;
