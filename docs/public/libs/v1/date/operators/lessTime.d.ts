import type { TheTime } from "../theTime";
import type { SerializedTheTime } from "../types";
/**
 * Checks whether a duration is less than or equal to a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `lessTime(input, threshold)` → `boolean`
 * - Curried: `lessTime(threshold)` → `(input) => boolean`
 * 
 * All parameters accept `TheTime` or `SerializedTheTime`.
 * 
 * ```ts
 * const input = D.createTime(90, "minute");
 * const threshold = D.createTime(2, "hour");
 * 
 * const result = D.lessTime(input, threshold);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.lessTime(threshold),
 * ); // true
 * ```
 * 
 * @remarks
 * - Inclusive comparison: `input <= threshold`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/lessTime
 * 
 * @namespace D
 * 
 */
export declare function lessTime<GenericValue extends TheTime | SerializedTheTime>(threshold: TheTime | SerializedTheTime): (input: GenericValue) => boolean;
export declare function lessTime<GenericValue extends TheTime | SerializedTheTime>(input: GenericValue, threshold: TheTime | SerializedTheTime): boolean;
