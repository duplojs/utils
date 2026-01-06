import type { TheDate } from "../types";
/**
 * Checks whether a date is strictly less than another.
 * 
 * **Supported call styles:**
 * - Classic: `lessThan(input, threshold)` → returns a value
 * - Curried: `lessThan(threshold)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const threshold = D.create("2024-06-20");
 * const input = D.create("2024-06-20");
 * 
 * const result = D.lessThan(input, threshold);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.lessThan(threshold),
 * ); // result: true
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/lessThan
 * 
 * @namespace D
 * 
 */
export declare function lessThan<GenericValue extends TheDate>(threshold: TheDate): (input: GenericValue) => boolean;
export declare function lessThan<GenericValue extends TheDate>(input: GenericValue, threshold: TheDate): boolean;
