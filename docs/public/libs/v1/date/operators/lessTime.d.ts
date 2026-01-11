import type { TheTime } from "../types";
/**
 * Checks whether a time is less than or equal to another.
 * 
 * **Supported call styles:**
 * - Classic: `lessTime(input, threshold)` → returns a value
 * - Curried: `lessTime(threshold)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "time1000+";
 * const threshold = "time1500+";
 * 
 * const result = D.lessTime(input, threshold);
 * // result: true
 * 
 * if (D.lessTime(input, threshold)) {
 * 	// input is less or equal
 * }
 * 
 * const result2 = pipe(
 * 	input,
 * 	when(
 * 		D.lessTime(threshold),
 * 		() => "ok",
 * 	),
 * );
 * // result2: "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/lessTime
 * 
 * @namespace D
 * 
 */
export declare function lessTime<GenericValue extends TheTime>(threshold: TheTime): (input: GenericValue) => boolean;
export declare function lessTime<GenericValue extends TheTime>(input: GenericValue, threshold: TheTime): boolean;
