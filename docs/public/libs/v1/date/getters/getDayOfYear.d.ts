import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import type { Timezone } from "../timezone";
/**
 * Returns the day number in the year (`1` to `365`/`366`) for a date in a target timezone.
 * 
 * Signature: `getDayOfYear(input, timezone?)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.
 * 
 * ```ts
 * const input = D.create("2024-12-31", {
 * 	hour: "23",
 * 	minute: "30",
 * });
 * const utcDayOfYear = D.getDayOfYear(input);
 * // utcDayOfYear: 366
 * 
 * const sydneyDayOfYear = D.getDayOfYear(input, "Australia/Sydney");
 * // sydneyDayOfYear: 1
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getDayOfYear(value, "UTC"),
 * ); // 366
 * ```
 * 
 * @remarks
 * - Leap years produce values up to `366`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getDayOfYear
 * 
 * @namespace D
 * 
 */
export declare function getDayOfYear<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, timezone?: Timezone): number;
