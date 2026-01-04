/**
 * Checks if a number is within a range (inclusive).
 * 
 * **Supported call styles:**
 * - Classic: `between(value, greater, less)` → returns a boolean
 * - Curried: `between(greater, less)` → returns a function waiting for the value
 * 
 * @example
 * ```ts
 * N.between(
 * 	5,
 * 	0,
 * 	10,
 * ); // true
 * 
 * pipe(
 * 	10,
 * 	N.between(0, 10),
 * ); // true
 * 
 * N.between(
 * 	11,
 * 	0,
 * 	10,
 * ); // false
 * 
 * ```
 * 
 * @see [`N.betweenThan`](https://utils.duplojs.dev/en/v1/api/number/betweenThan) For strict bounds
 * @see https://utils.duplojs.dev/en/v1/api/number/between
 * 
 * @namespace N
 * 
 */
export declare function between<GenericInput extends number>(greater: number, less: number): (input: GenericInput) => boolean;
export declare function between<GenericInput extends number>(input: GenericInput, greater: number, less: number): boolean;
