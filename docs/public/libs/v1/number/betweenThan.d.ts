/**
 * Checks if a number is within a range (exclusive).
 * 
 * **Supported call styles:**
 * - Classic: `betweenThan(value, greaterThan, lessThan)` → returns a boolean
 * - Curried: `betweenThan(greaterThan, lessThan)` → returns a function waiting for the value
 * 
 * ```ts
 * N.betweenThan(
 * 	5,
 * 	0,
 * 	10,
 * ); // true
 * 
 * pipe(
 * 	10,
 * 	N.betweenThan(0, 10),
 * ); // false
 * 
 * N.betweenThan(
 * 	11,
 * 	0,
 * 	10,
 * ); // false
 * 
 * ```
 * 
 * @see [`N.between`](https://utils.duplojs.dev/en/v1/api/number/between) For inclusive bounds
 * @see https://utils.duplojs.dev/en/v1/api/number/betweenThan
 * 
 * @namespace N
 * 
 */
export declare function betweenThan<GenericInput extends number>(greaterThan: number, lessThan: number): (input: GenericInput) => boolean;
export declare function betweenThan<GenericInput extends number>(input: GenericInput, greaterThan: number, lessThan: number): boolean;
