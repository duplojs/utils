import type { TheTime } from "../types";
/**
 * Checks whether a time is strictly less than another.
 * 
 * **Supported call styles:**
 * - Classic: `lessThanTime(input, threshold)` → returns a value
 * - Curried: `lessThanTime(threshold)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "time1000+";
 * const threshold = "time1500+";
 * 
 * const result = D.lessThanTime(input, threshold);
 * // result: true
 * 
 * if (D.lessThanTime(input, threshold)) {
 * 	// input is strictly less
 * }
 * 
 * const result2 = pipe(
 * 	input,
 * 	when(
 * 		D.lessThanTime(threshold),
 * 		() => "ok",
 * 	),
 * );
 * // result2: "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/lessThanTime
 * 
 * @namespace D
 * 
 */
export declare function lessThanTime<GenericValue extends TheTime>(threshold: TheTime): (input: GenericValue) => boolean;
export declare function lessThanTime<GenericValue extends TheTime>(input: GenericValue, threshold: TheTime): boolean;
