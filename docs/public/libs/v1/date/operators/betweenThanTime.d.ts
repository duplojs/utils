import type { TheTime } from "../types";
/**
 * Checks whether a time is between two bounds (exclusive).
 * 
 * **Supported call styles:**
 * - Classic: `betweenThanTime(input, greater, less)` → returns a value
 * - Curried: `betweenThanTime(greater, less)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "time1500+";
 * const greater = "time1000+";
 * const less = "time2000+";
 * 
 * const result = D.betweenThanTime(input, greater, less);
 * // result: true
 * 
 * if (D.betweenThanTime(input, greater, less)) {
 * 	// input is strictly within bounds
 * }
 * 
 * const result2 = pipe(
 * 	input,
 * 	when(
 * 		D.betweenThanTime(greater, less),
 * 		() => "ok",
 * 	),
 * );
 * // result2: "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/betweenThanTime
 * 
 * @namespace D
 * 
 */
export declare function betweenThanTime<GenericValue extends TheTime>(greater: TheTime, less: TheTime): (input: GenericValue) => boolean;
export declare function betweenThanTime<GenericValue extends TheTime>(input: GenericValue, greater: TheTime, less: TheTime): boolean;
