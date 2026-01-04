/**
 * Divides a number by another.
 * 
 * **Supported call styles:**
 * - Classic: `divide(value, operand)` → returns a number
 * - Curried: `divide(operand)` → returns a function waiting for the value
 * 
 * @example
 * ```ts
 * N.divide(
 * 	10,
 * 	2,
 * ); // 5
 * 
 * pipe(
 * 	9,
 * 	N.divide(3),
 * ); // 3
 * 
 * N.divide(
 * 	5,
 * 	2,
 * ); // 2.5
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/divide
 * 
 * @namespace N
 * 
 */
export declare function divide<GenericValue extends number>(divisor: number): (value: GenericValue) => number;
export declare function divide<GenericValue extends number>(value: GenericValue, divisor: number): number;
