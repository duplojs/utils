import { type Time } from "../../base";
import { type TheTime } from "../../../../date";
/**
 * Checks whether a wrapped `Time` is strictly greater than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `timeGreaterThan(time, threshold)` → `boolean`
 * - Curried: `timeGreaterThan(threshold)` → function waiting for the time
 * 
 * `threshold` accepts wrapped `Time` or raw `TheTime`.
 * 
 * ```ts
 * const duration = C.Time.createOrThrow(D.createTime(1, "hour"));
 * const threshold = D.createTime(30, "minute");
 * 
 * const result = C.timeGreaterThan(duration, threshold);
 * // result: true
 * 
 * pipe(
 * 	duration,
 * 	C.timeGreaterThan(threshold),
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeGreaterThan
 * 
 * @namespace C
 * 
 */
export declare function timeGreaterThan(threshold: Time | TheTime): (primitive: Time) => boolean;
export declare function timeGreaterThan(primitive: Time, threshold: Time | TheTime): boolean;
