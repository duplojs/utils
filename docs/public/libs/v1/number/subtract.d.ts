/**
 * Subtracts a number from another.
 * 
 * **Supported call styles:**
 * - Classic: `subtract(value, operand)` → returns a number
 * - Curried: `subtract(operand)` → returns a function waiting for the value
 * 
 * ```ts
 * N.subtract(
 * 	10,
 * 	3,
 * ); // 7
 * 
 * pipe(
 * 	10,
 * 	N.subtract(2),
 * ); // 8
 * 
 * N.subtract(
 * 	5,
 * 	8,
 * ); // -3
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/subtract
 * 
 * @namespace N
 * 
 */
export declare function subtract<GenericValue extends number>(subtrahend: number): (value: GenericValue) => number;
export declare function subtract<GenericValue extends number>(value: GenericValue, subtrahend: number): number;
