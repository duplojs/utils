import { type Time } from "../../base";
import { type TheTime } from "../../../../date";
/**
 * Checks whether a Time is less than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `timeLessThan(time, threshold)` -> returns a boolean
 * - Curried: `timeLessThan(threshold)` -> returns a function waiting for the time
 * 
 * Use it to compare wrapped durations or raw TheTime values.
 * 
 * ```ts
 * const duration = C.Time.createOrThrow(D.createTheTime(3_600_000));
 * const threshold = D.createTheTime(7_200_000);
 * 
 * if (C.timeLessThan(duration, threshold)) {
 * 	// duration is less than threshold
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeLessThan
 * 
 * @namespace C
 * 
 */
export declare function timeLessThan(threshold: Time | TheTime): (primitive: Time) => boolean;
export declare function timeLessThan(primitive: Time, threshold: Time | TheTime): boolean;
