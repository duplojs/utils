import { type Date, type Time } from "../../base";
import { type TheTime } from "../../../../date";
/**
 * Adds a duration to a wrapped `Date` and returns a wrapped `Date`.
 * 
 * **Supported call styles:**
 * - Classic: `dateAddTime(date, time)` → `Date`
 * - Curried: `dateAddTime(time)` → function waiting for the date
 * 
 * `time` accepts wrapped `Time` or raw `TheTime`.
 * 
 * ```ts
 * const date = C.Date.createOrThrow(D.create("2024-01-01"));
 * const oneHour = C.Time.createOrThrow(D.createTime(1, "hour"));
 * 
 * const later = C.dateAddTime(date, oneHour);
 * // later: C.Date
 * 
 * const curried = pipe(
 * 	date,
 * 	C.dateAddTime(D.createTime(1, "minute")),
 * );
 * // curried: C.Date
 * 
 * const mixed = C.dateAddTime(date, D.createTime(500, "millisecond"));
 * // mixed: C.Date
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateAddTime
 * 
 * @namespace C
 * 
 */
export declare function dateAddTime(time: Time | TheTime): (primitive: Date) => Date;
export declare function dateAddTime(primitive: Date, time: Time | TheTime): Date;
