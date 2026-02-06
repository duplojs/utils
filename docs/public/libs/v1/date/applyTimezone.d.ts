import type { Timezone } from "./timezone";
import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";
/**
 * Applies a timezone offset to a date and returns the shifted `TheDate`.
 * 
 * **Supported call styles:**
 * - Classic: `applyTimezone(input, timeZone)` → `TheDate`
 * - Curried: `applyTimezone(timeZone)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-01-01", {
 * 	hour: "00",
 * });
 * 
 * const shifted = D.applyTimezone(input, "America/New_York");
 * // shifted: TheDate
 * 
 * pipe(
 * 	input,
 * 	D.applyTimezone("Europe/Paris"),
 * ```
 * 
 * @remarks
 * - This is a timestamp shift based on the target timezone offset.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/applyTimezone
 * 
 * @namespace D
 * 
 */
export declare function applyTimezone(timeZone: Timezone): (input: TheDate | SerializedTheDate) => TheDate;
export declare function applyTimezone(input: TheDate | SerializedTheDate, timeZone: Timezone): TheDate;
