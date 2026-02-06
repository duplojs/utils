import type { TheTime } from "../theTime";
import type { SerializedTheTime } from "../types";
/**
 * Checks whether a duration is strictly less than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `lessThanTime(input, threshold)` → `boolean`
 * - Curried: `lessThanTime(threshold)` → `(input) => boolean`
 * 
 * All parameters accept `TheTime` or `SerializedTheTime`.
 * 
 * ```ts
 * const input = D.createTime(90, "minute");
 * const threshold = D.createTime(90, "minute");
 * 
 * const result = D.lessThanTime(input, threshold);
 * // result: false
 * 
 * pipe(
 * 	input,
 * 	D.lessThanTime(threshold),
 * ); // false
 * ```
 * 
 * @remarks
 * - Strict comparison: `input < threshold`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/lessThanTime
 * 
 * @namespace D
 * 
 */
export declare function lessThanTime<GenericValue extends TheTime | SerializedTheTime>(threshold: TheTime | SerializedTheTime): (input: GenericValue) => boolean;
export declare function lessThanTime<GenericValue extends TheTime | SerializedTheTime>(input: GenericValue, threshold: TheTime | SerializedTheTime): boolean;
