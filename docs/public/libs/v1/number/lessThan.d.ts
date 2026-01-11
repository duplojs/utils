/**
 * Checks if a value is strictly less than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `lessThan(value, threshold)` → returns a boolean
 * - Curried: `lessThan(threshold)` → returns a function waiting for the value
 * 
 * ```ts
 * N.lessThan(
 * 	10,
 * 	10,
 * ); // false
 * 
 * pipe(
 * 	9,
 * 	N.lessThan(10),
 * ); // true
 * 
 * N.lessThan(
 * 	11,
 * 	10,
 * ); // false
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/lessThan
 * 
 * @namespace N
 * 
 */
export declare function lessThan<GenericValue extends number>(threshold: number): (value: GenericValue) => boolean;
export declare function lessThan<GenericValue extends number>(value: GenericValue, threshold: number): boolean;
