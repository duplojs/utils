import type { TheTime } from "../theTime";
import type { SerializedTheTime } from "../types";
/**
 * Checks whether a duration is strictly greater than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `greaterThanTime(input, threshold)` → `boolean`
 * - Curried: `greaterThanTime(threshold)` → `(input) => boolean`
 * 
 * All parameters accept `TheTime` or `SerializedTheTime`.
 * 
 * ```ts
 * const input = D.createTime(2, "hour");
 * const threshold = D.createTime(2, "hour");
 * 
 * const result = D.greaterThanTime(input, threshold);
 * // result: false
 * 
 * pipe(
 * 	input,
 * 	D.greaterThanTime(threshold),
 * ); // false
 * ```
 * 
 * @remarks
 * - Strict comparison: `input > threshold`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/greaterThanTime
 * 
 * @namespace D
 * 
 */
export declare function greaterThanTime<GenericValue extends TheTime | SerializedTheTime>(threshold: TheTime | SerializedTheTime): (input: GenericValue) => boolean;
export declare function greaterThanTime<GenericValue extends TheTime | SerializedTheTime>(input: GenericValue, threshold: TheTime | SerializedTheTime): boolean;
