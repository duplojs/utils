import { type Timezone } from "./timezone";
import { type TheDate } from "./types";
/**
 * Applies a timezone to a date.
 * 
 * **Supported call styles:**
 * - Classic: `applyTimezone(timeZone)` → returns a value
 * - Curried: `applyTimezone(theDate, timeZone)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const theDate = D.createOrThrow(1704067200000);
 * const shiftedDate = D.applyTimezone(theDate, "America/New_York");
 * // shiftedDate: "date1704085200000+"
 * 
 * pipe(
 * 	theDate,
 * 	D.applyTimezone("America/New_York"),
 * ); // shiftedDate: "date1704085200000+"
 * 
 * ```
 * 
 * @remarks
 * - Applies the timezone offset to shift the date.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/applyTimezone
 * 
 * @namespace D
 * 
 */
export declare function applyTimezone(timeZone: Timezone): (theDate: TheDate) => TheDate;
export declare function applyTimezone(theDate: TheDate, timeZone: Timezone): TheDate;
