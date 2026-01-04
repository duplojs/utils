/**
 * Checks if a value is less than or equal to a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `less(value, threshold)` → returns a boolean
 * - Curried: `less(threshold)` → returns a function waiting for the value
 * 
 * @example
 * ```ts
 * N.less(
 * 	10,
 * 	10,
 * ); // true
 * 
 * pipe(
 * 	9,
 * 	N.less(10),
 * ); // true
 * 
 * N.less(
 * 	11,
 * 	10,
 * ); // false
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/less
 * 
 * @namespace N
 * 
 */
export declare function less<GenericValue extends number>(threshold: number): (value: GenericValue) => boolean;
export declare function less<GenericValue extends number>(value: GenericValue, threshold: number): boolean;
