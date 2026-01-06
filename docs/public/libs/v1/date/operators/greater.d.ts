import type { TheDate } from "../types";
/**
 * Checks whether a date is greater than or equal to another.
 * 
 * **Supported call styles:**
 * - Classic: `greater(input, threshold)` → returns a value
 * - Curried: `greater(threshold)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const threshold = D.create("2024-06-01");
 * const input = D.create("2024-06-20");
 * 
 * const result = D.greater(input, threshold);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.greater(threshold),
 * ); // result: true
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/greater
 * 
 * @namespace D
 * 
 */
export declare function greater<GenericValue extends TheDate>(threshold: TheDate): (input: GenericValue) => boolean;
export declare function greater<GenericValue extends TheDate>(input: GenericValue, threshold: TheDate): boolean;
