import { type Time } from "../../base";
import { type TheTime } from "../../../../date";
/**
 * Checks whether a wrapped `Time` is strictly less than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `timeLessThan(time, threshold)` → `boolean`
 * - Curried: `timeLessThan(threshold)` → function waiting for the time
 * 
 * `threshold` accepts wrapped `Time` or raw `TheTime`.
 * 
 * ```ts
 * const duration = C.Time.createOrThrow(D.createTime(1, "hour"));
 * const threshold = D.createTime(2, "hour");
 * 
 * const result = C.timeLessThan(duration, threshold);
 * // result: true
 * 
 * pipe(
 * 	duration,
 * 	C.timeLessThan(threshold),
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeLessThan
 * 
 * @namespace C
 * 
 */
export declare function timeLessThan(threshold: Time | TheTime): (primitive: Time) => boolean;
export declare function timeLessThan(primitive: Time, threshold: Time | TheTime): boolean;
