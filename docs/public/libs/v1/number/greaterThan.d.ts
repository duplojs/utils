/**
 * Checks if a value is strictly greater than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `greaterThan(value, threshold)` → returns a boolean
 * - Curried: `greaterThan(threshold)` → returns a function waiting for the value
 * 
 * ```ts
 * N.greaterThan(
 * 	10,
 * 	10,
 * ); // false
 * 
 * N.greaterThan(
 * 	9,
 * 	10,
 * ); // false
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/greaterThan
 * 
 * @namespace N
 * 
 */
export declare function greaterThan<GenericValue extends number>(threshold: number): (value: GenericValue) => boolean;
export declare function greaterThan<GenericValue extends number>(value: GenericValue, threshold: number): boolean;
