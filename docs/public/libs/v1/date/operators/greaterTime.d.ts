import type { TheTime } from "../types";
/**
 * Checks whether a time is greater than or equal to another.
 * 
 * **Supported call styles:**
 * - Classic: `greaterTime(input, threshold)` → returns a value
 * - Curried: `greaterTime(threshold)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "time2000+";
 * const threshold = "time1500+";
 * 
 * const result = D.greaterTime(input, threshold);
 * // result: true
 * 
 * if (D.greaterTime(input, threshold)) {
 * 	// input is greater or equal
 * }
 * 
 * const result2 = pipe(
 * 	input,
 * 	when(
 * 		D.greaterTime(threshold),
 * 		() => "ok",
 * 	),
 * );
 * // result2: "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/greaterTime
 * 
 * @namespace D
 * 
 */
export declare function greaterTime<GenericValue extends TheTime>(threshold: TheTime): (input: GenericValue) => boolean;
export declare function greaterTime<GenericValue extends TheTime>(input: GenericValue, threshold: TheTime): boolean;
