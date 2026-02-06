import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import type { Timezone } from "../timezone";
/**
 * Returns the month number (`1` to `12`) for a date in a target timezone.
 * 
 * Signature: `getMonth(input, timezone?)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.
 * 
 * ```ts
 * const input = D.create("2024-12-31", {
 * 	hour: "23",
 * 	minute: "30",
 * });
 * const utcMonth = D.getMonth(input);
 * // utcMonth: 12
 * 
 * const tokyoMonth = D.getMonth(input, "Asia/Tokyo");
 * // tokyoMonth: 1
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getMonth(value, "UTC"),
 * ); // 12
 * ```
 * 
 * @remarks
 * - Unlike native `Date#getMonth`, this getter is 1-based.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getMonth
 * 
 * @namespace D
 * 
 */
export declare function getMonth<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, timezone?: Timezone): number;
