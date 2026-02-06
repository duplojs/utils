import type { TheTime } from "../theTime";
import type { SerializedTheTime } from "../types";
/**
 * Checks whether a duration is greater than or equal to a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `greaterTime(input, threshold)` → `boolean`
 * - Curried: `greaterTime(threshold)` → `(input) => boolean`
 * 
 * All parameters accept `TheTime` or `SerializedTheTime`.
 * 
 * ```ts
 * const input = D.createTime(2, "hour");
 * const threshold = D.createTime(90, "minute");
 * 
 * const result = D.greaterTime(input, threshold);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.greaterTime(threshold),
 * ); // true
 * ```
 * 
 * @remarks
 * - Inclusive comparison: `input >= threshold`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/greaterTime
 * 
 * @namespace D
 * 
 */
export declare function greaterTime<GenericValue extends TheTime | SerializedTheTime>(threshold: TheTime | SerializedTheTime): (input: GenericValue) => boolean;
export declare function greaterTime<GenericValue extends TheTime | SerializedTheTime>(input: GenericValue, threshold: TheTime | SerializedTheTime): boolean;
