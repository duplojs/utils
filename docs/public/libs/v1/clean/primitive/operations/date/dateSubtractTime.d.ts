import { type Date, type Time } from "../../base";
import { type TheTime } from "../../../../date";
/**
 * Subtracts a duration from a wrapped `Date` and returns a wrapped `Date`.
 * 
 * **Supported call styles:**
 * - Classic: `dateSubtractTime(date, time)` → `Date`
 * - Curried: `dateSubtractTime(time)` → function waiting for the date
 * 
 * `time` accepts wrapped `Time` or raw `TheTime`.
 * 
 * ```ts
 * const date = C.Date.createOrThrow(D.create("2024-01-02"));
 * const halfMinute = C.Time.createOrThrow(D.createTime(30, "second"));
 * 
 * const earlier = C.dateSubtractTime(date, halfMinute);
 * // earlier: C.Date
 * 
 * const curried = pipe(
 * 	date,
 * 	C.dateSubtractTime(D.createTime(1, "second")),
 * );
 * // curried: C.Date
 * 
 * const mixed = C.dateSubtractTime(date, D.createTime(500, "millisecond"));
 * // mixed: C.Date
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateSubtractTime
 * 
 * @namespace C
 * 
 */
export declare function dateSubtractTime(time: Time | TheTime): (primitive: Date) => Date;
export declare function dateSubtractTime(primitive: Date, time: Time | TheTime): Date;
