import type { TheTime } from "../types";
/**
 * Checks whether a time is between two bounds (inclusive).
 * 
 * **Supported call styles:**
 * - Classic: `betweenTime(input, greater, less)` → returns a value
 * - Curried: `betweenTime(greater, less)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "time1500+";
 * const greater = "time1000+";
 * const less = "time2000+";
 * 
 * const result = D.betweenTime(input, greater, less);
 * // result: true
 * 
 * if (D.betweenTime(input, greater, less)) {
 * 	// input is within bounds
 * }
 * 
 * const result2 = pipe(
 * 	input,
 * 	when(
 * 		D.betweenTime(greater, less),
 * 		() => "ok",
 * 	),
 * );
 * // result2: "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/betweenTime
 * 
 * @namespace D
 * 
 */
export declare function betweenTime<GenericValue extends TheTime>(greater: TheTime, less: TheTime): (input: GenericValue) => boolean;
export declare function betweenTime<GenericValue extends TheTime>(input: GenericValue, greater: TheTime, less: TheTime): boolean;
