import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import { type Timezone } from "../timezone";
/**
 * Returns the minute (`0` to `59`) for a date in a target timezone.
 * 
 * Signature: `getMinute(input, timezone?)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.
 * 
 * ```ts
 * const input = D.create("2024-06-20", {
 * 	hour: "00",
 * 	minute: "30",
 * });
 * const utcMinute = D.getMinute(input);
 * // utcMinute: 30
 * 
 * const tokyoMinute = D.getMinute(input, "Asia/Tokyo");
 * // tokyoMinute: 30
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getMinute(value, "UTC"),
 * ); // 30
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getMinute
 * 
 * @namespace D
 * 
 */
export declare function getMinute<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, timezone?: Timezone): number;
