/**
 * Multiplies two numbers.
 * 
 * **Supported call styles:**
 * - Classic: `multiply(value, operand)` → returns a number
 * - Curried: `multiply(operand)` → returns a function waiting for the value
 * 
 * ```ts
 * N.multiply(
 * 	3,
 * 	4,
 * ); // 12
 * 
 * pipe(
 * 	3,
 * 	N.multiply(2),
 * ); // 6
 * 
 * N.multiply(
 * 	-2,
 * 	5,
 * ); // -10
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/multiply
 * 
 * @namespace N
 * 
 */
export declare function multiply<GenericValue extends number>(operand: number): (value: GenericValue) => number;
export declare function multiply<GenericValue extends number>(value: GenericValue, operand: number): number;
