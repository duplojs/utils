/**
 * Checks if a value is greater than or equal to a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `greater(value, threshold)` → returns a boolean
 * - Curried: `greater(threshold)` → returns a function waiting for the value
 * 
 * @example
 * ```ts
 * N.greater(
 * 	10,
 * 	10,
 * ); // true
 * 
 * pipe(
 * 	9,
 * 	N.greater(10),
 * ); // false
 * 
 * N.greater(
 * 	9,
 * 	10,
 * ); // true
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/greater
 * 
 * @namespace N
 * 
 */
export declare function greater<GenericValue extends number>(threshold: number): (value: GenericValue) => boolean;
export declare function greater<GenericValue extends number>(value: GenericValue, threshold: number): boolean;
