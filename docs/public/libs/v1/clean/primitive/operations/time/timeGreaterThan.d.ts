import { type Time } from "../../base";
import { type TheTime } from "../../../../date";
/**
 * Checks whether a Time is greater than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `timeGreaterThan(time, threshold)` -> returns a boolean
 * - Curried: `timeGreaterThan(threshold)` -> returns a function waiting for the time
 * 
 * Use it to compare wrapped durations or raw TheTime values.
 * 
 * ```ts
 * const duration = C.Time.createOrThrow(D.createTheTime(3_600_000));
 * const threshold = D.createTheTime(1_800_000);
 * 
 * if (C.timeGreaterThan(duration, threshold)) {
 * 	// duration is greater than threshold
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeGreaterThan
 * 
 * @namespace C
 * 
 */
export declare function timeGreaterThan(threshold: Time | TheTime): (primitive: Time) => boolean;
export declare function timeGreaterThan(primitive: Time, threshold: Time | TheTime): boolean;
