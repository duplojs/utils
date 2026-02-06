import type { TheTime } from "../theTime";
import type { SerializedTheTime } from "../types";
/**
 * Checks whether a duration is inside an exclusive range.
 * 
 * **Supported call styles:**
 * - Classic: `betweenThanTime(input, greater, less)` → `boolean`
 * - Curried: `betweenThanTime(greater, less)` → `(input) => boolean`
 * 
 * All parameters accept `TheTime` or `SerializedTheTime`.
 * 
 * ```ts
 * const input = D.createTime(2, "hour");
 * const greater = D.createTime(1, "hour");
 * const less = D.createTime(2, "hour");
 * 
 * const result = D.betweenThanTime(input, greater, less);
 * // result: false
 * 
 * pipe(
 * 	input,
 * 	D.betweenThanTime(greater, less),
 * ); // false
 * ```
 * 
 * @remarks
 * - Exclusive bounds: `input > greater && input < less`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/betweenThanTime
 * 
 * @namespace D
 * 
 */
export declare function betweenThanTime<GenericValue extends TheTime | SerializedTheTime>(greater: TheTime | SerializedTheTime, less: TheTime | SerializedTheTime): (input: GenericValue) => boolean;
export declare function betweenThanTime<GenericValue extends TheTime | SerializedTheTime>(input: GenericValue, greater: TheTime | SerializedTheTime, less: TheTime | SerializedTheTime): boolean;
