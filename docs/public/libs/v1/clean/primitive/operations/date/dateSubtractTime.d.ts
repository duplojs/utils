import { type Date, type Time } from "../../base";
import { type TheTime } from "../../../../date";
/**
 * Subtracts a time duration from a Date and returns a new wrapped Date.
 * 
 * **Supported call styles:**
 * - Classic: `dateSubtractTime(date, time)` -> returns a Date
 * - Curried: `dateSubtractTime(time)` -> returns a function waiting for the date
 * 
 * Use it to move dates backward while keeping values wrapped.
 * 
 * ```ts
 * const date = C.Date.createOrThrow(D.create("2024-01-02"));
 * const halfMinute = C.Time.createOrThrow(D.createTheTime(30_000));
 * 
 * const earlier = C.dateSubtractTime(date, halfMinute);
 * // earlier: C.Date
 * 
 * const curried = pipe(
 * 	date,
 * 	C.dateSubtractTime(D.createTheTime(1_000)),
 * );
 * // curried: C.Date
 * 
 * const mixed = C.dateSubtractTime(
 * 	C.Date.createOrThrow(D.create("2024-01-01")),
 * 	D.createTheTime(500),
 * );
 * // mixed: C.Date
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateSubtractTime
 * 
 * @namespace C
 * 
 */
export declare function dateSubtractTime(time: Time | TheTime): (primitive: Date) => Date;
export declare function dateSubtractTime(primitive: Date, time: Time | TheTime): Date;
