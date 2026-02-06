import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import type { Timezone } from "../timezone";
/**
 * Returns the day of week (`0` to `6`) for a date in a target timezone.
 * 
 * Signature: `getDayOfWeek(input, timezone?)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.
 * 
 * ```ts
 * const input = D.create("2024-06-17");
 * const utcWeekday = D.getDayOfWeek(input);
 * // utcWeekday: 1
 * 
 * const tokyoWeekday = D.getDayOfWeek(input, "Asia/Tokyo");
 * // tokyoWeekday: 1
 * 
 * pipe(
 * 	input,
 * 	D.getDayOfWeek,
 * ); // 1
 * 
 * ```
 * 
 * @remarks
 * - Returned mapping is: `0` Sunday, `1` Monday, ..., `6` Saturday.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getDayOfWeek
 * 
 * @namespace D
 * 
 */
export declare function getDayOfWeek<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, timezone?: Timezone): number;
