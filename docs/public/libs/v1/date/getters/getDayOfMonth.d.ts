import type { SerializedTheDate } from "../types";
import type { TheDate } from "../theDate";
import type { Timezone } from "../timezone";
/**
 * Returns the day of month (`1` to `31`) for a date in a target timezone.
 * 
 * Signature: `getDayOfMonth(input, timezone?)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.
 * 
 * ```ts
 * const input = D.create("2024-06-01", {
 * 	hour: "00",
 * 	minute: "30",
 * });
 * const utcDay = D.getDayOfMonth(input);
 * // utcDay: 1
 * 
 * const laDay = D.getDayOfMonth(input, "America/Los_Angeles");
 * // laDay: 31
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getDayOfMonth(value, "UTC"),
 * ); // 1
 * 
 * ```
 * 
 * @remarks
 * - The same instant can map to a different calendar day depending on timezone.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getDayOfMonth
 * 
 * @namespace D
 * 
 */
export declare function getDayOfMonth<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, timezone?: Timezone): number;
