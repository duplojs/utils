/**
 * Adds two numbers.
 * 
 * **Supported call styles:**
 * - Classic: `add(value, operand)` → returns a number
 * - Curried: `add(operand)` → returns a function waiting for the value
 * 
 * ```ts
 * N.add(10, 5); // 15
 * 
 * pipe(
 * 	10,
 * 	N.add(5),
 * ); // 15
 * 
 * N.add(-3, 8); // 5
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/add
 * 
 * @namespace N
 * 
 */
export declare function add<GenericValue extends number>(operand: number): (value: GenericValue) => number;
export declare function add<GenericValue extends number>(value: GenericValue, operand: number): number;
