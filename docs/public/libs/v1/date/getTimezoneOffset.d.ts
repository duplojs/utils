import { type Timezone } from "./timezone";
import { type TheDate } from "./types";
/**
 * Returns the timezone offset of a date.
 * 
 * **Supported call styles:**
 * - Classic: `getTimezoneOffset(timeZone)` → returns a value
 * - Curried: `getTimezoneOffset(theDate, timeZone)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const theDate = D.createOrThrow(1704067200000);
 * const offset = D.getTimezoneOffset(theDate, "America/New_York");
 * // offset: -18000000
 * 
 * pipe(
 * 	theDate,
 * 	D.getTimezoneOffset("America/New_York"),
 * ); // offset: -18000000
 * 
 * ```
 * 
 * @remarks
 * - Returns the offset in milliseconds for the given timezone.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getTimezoneOffset
 * 
 * @namespace D
 * 
 */
export declare function getTimezoneOffset(timeZone: Timezone): (theDate: TheDate) => number;
export declare function getTimezoneOffset(theDate: TheDate, timeZone: Timezone): number;
