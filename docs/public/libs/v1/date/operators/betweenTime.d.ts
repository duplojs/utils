import type { TheTime } from "../theTime";
import type { SerializedTheTime } from "../types";
/**
 * Checks whether a duration is inside an inclusive range.
 * 
 * **Supported call styles:**
 * - Classic: `betweenTime(input, greater, less)` → `boolean`
 * - Curried: `betweenTime(greater, less)` → `(input) => boolean`
 * 
 * All parameters accept `TheTime` or `SerializedTheTime`.
 * 
 * ```ts
 * const input = D.createTime(90, "minute");
 * const greater = D.createTime(1, "hour");
 * const less = D.createTime(2, "hour");
 * 
 * const result = D.betweenTime(input, greater, less);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.betweenTime(greater, less),
 * ); // true
 * ```
 * 
 * @remarks
 * - Inclusive bounds: `input >= greater && input <= less`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/betweenTime
 * 
 * @namespace D
 * 
 */
export declare function betweenTime<GenericValue extends TheTime | SerializedTheTime>(greater: TheTime | SerializedTheTime, less: TheTime | SerializedTheTime): (input: GenericValue) => boolean;
export declare function betweenTime<GenericValue extends TheTime | SerializedTheTime>(input: GenericValue, greater: TheTime | SerializedTheTime, less: TheTime | SerializedTheTime): boolean;
