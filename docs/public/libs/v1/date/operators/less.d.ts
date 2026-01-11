import type { TheDate } from "../types";
/**
 * Checks whether a date is less than or equal to another.
 * 
 * **Supported call styles:**
 * - Classic: `less(input, threshold)` → returns a value
 * - Curried: `less(threshold)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const threshold = D.create("2024-06-20");
 * const input = D.create("2024-05-01");
 * 
 * const result = D.less(input, threshold);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.less(threshold),
 * ); // result: true
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/less
 * 
 * @namespace D
 * 
 */
export declare function less<GenericValue extends TheDate>(threshold: TheDate): (input: GenericValue) => boolean;
export declare function less<GenericValue extends TheDate>(input: GenericValue, threshold: TheDate): boolean;
