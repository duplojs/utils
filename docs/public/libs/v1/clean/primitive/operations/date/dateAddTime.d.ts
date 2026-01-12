import { type Date, type Time } from "../../base";
import { type TheTime } from "../../../../date";
/**
 * Adds a time duration to a Date and returns a new wrapped Date.
 * 
 * **Supported call styles:**
 * - Classic: `dateAddTime(date, time)` -> returns a Date
 * - Curried: `dateAddTime(time)` -> returns a function waiting for the date
 * 
 * Use it to move dates forward while keeping values wrapped.
 * 
 * ```ts
 * const date = C.Date.createOrThrow(D.create("2024-01-01"));
 * const oneHour = C.Time.createOrThrow(D.createTheTime(3_600_000));
 * 
 * const later = C.dateAddTime(date, oneHour);
 * // later: C.Date
 * 
 * const curried = pipe(
 * 	date,
 * 	C.dateAddTime(D.createTheTime(60_000)),
 * );
 * // curried: C.Date
 * 
 * const mixed = C.dateAddTime(
 * 	C.Date.createOrThrow(D.create("2024-01-02")),
 * 	D.createTheTime(500),
 * );
 * // mixed: C.Date
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateAddTime
 * 
 * @namespace C
 * 
 */
export declare function dateAddTime(time: Time | TheTime): (primitive: Date) => Date;
export declare function dateAddTime(primitive: Date, time: Time | TheTime): Date;
