/**
 * Raises a number to a given exponent.
 * 
 * **Supported call styles:**
 * - Classic: `power(value, operand)` → returns a number
 * - Curried: `power(operand)` → returns a function waiting for the value
 * 
 * ```ts
 * N.power(
 * 	2,
 * 	3,
 * ); // 8
 * 
 * pipe(
 * 	3,
 * 	N.power(2),
 * ); // 9
 * 
 * N.power(
 * 	9,
 * 	0,
 * ); // 1
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/power
 * 
 * @namespace N
 * 
 */
export declare function power<GenericValue extends number>(exponent: number): (value: GenericValue) => number;
export declare function power<GenericValue extends number>(value: GenericValue, exponent: number): number;
