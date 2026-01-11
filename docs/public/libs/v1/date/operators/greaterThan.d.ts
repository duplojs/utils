import type { TheDate } from "../types";
/**
 * Checks whether a date is strictly greater than another.
 * 
 * **Supported call styles:**
 * - Classic: `greaterThan(input, threshold)` → returns a value
 * - Curried: `greaterThan(threshold)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const threshold = D.create("2024-06-20");
 * const input = D.create("2024-06-20");
 * 
 * const predicate = D.greaterThan(input, threshold);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.greaterThan(threshold),
 * ); // result: true
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/greaterThan
 * 
 * @namespace D
 * 
 */
export declare function greaterThan<GenericValue extends TheDate>(threshold: TheDate): (input: GenericValue) => boolean;
export declare function greaterThan<GenericValue extends TheDate>(input: GenericValue, threshold: TheDate): boolean;
