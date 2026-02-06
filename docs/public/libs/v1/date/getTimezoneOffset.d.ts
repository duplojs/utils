import type { Timezone } from "./timezone";
import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";
/**
 * Returns timezone offset in milliseconds for a given date and timezone.
 * 
 * **Supported call styles:**
 * - Classic: `getTimezoneOffset(input, timeZone)` → `number`
 * - Curried: `getTimezoneOffset(timeZone)` → `(input) => number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-01-01", {
 * 	hour: "00",
 * });
 * 
 * const offset = D.getTimezoneOffset(input, "America/New_York");
 * // offset: number
 * 
 * pipe(
 * 	input,
 * 	D.getTimezoneOffset("Europe/Paris"),
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getTimezoneOffset
 * 
 * @namespace D
 * 
 */
export declare function getTimezoneOffset(timeZone: Timezone): (input: TheDate | SerializedTheDate) => number;
export declare function getTimezoneOffset(input: TheDate | SerializedTheDate, timeZone: Timezone): number;
