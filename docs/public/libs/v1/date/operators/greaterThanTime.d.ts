import type { TheTime } from "../types";
/**
 * Checks whether a time is strictly greater than another.
 * 
 * **Supported call styles:**
 * - Classic: `greaterThanTime(input, threshold)` → returns a value
 * - Curried: `greaterThanTime(threshold)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "time2000+";
 * const threshold = "time1500+";
 * 
 * const result = D.greaterThanTime(input, threshold);
 * // result: true
 * 
 * if (D.greaterThanTime(input, threshold)) {
 * 	// input is strictly greater
 * }
 * 
 * const result2 = pipe(
 * 	input,
 * 	when(
 * 		D.greaterThanTime(threshold),
 * 		() => "ok",
 * 	),
 * );
 * // result2: "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/greaterThanTime
 * 
 * @namespace D
 * 
 */
export declare function greaterThanTime<GenericValue extends TheTime>(threshold: TheTime): (input: GenericValue) => boolean;
export declare function greaterThanTime<GenericValue extends TheTime>(input: GenericValue, threshold: TheTime): boolean;
