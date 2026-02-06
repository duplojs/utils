import type { SerializedTheDate } from "../types";
import type { TheDate } from "../theDate";
import type { Timezone } from "../timezone";
/**
 * Returns the second (`0` to `59`) for a date in a target timezone.
 * 
 * Signature: `getSecond(input, timezone?)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.
 * 
 * ```ts
 * const input = D.create("2024-06-20", {
 * 	hour: "00",
 * 	minute: "00",
 * 	second: "45",
 * });
 * const utcSecond = D.getSecond(input);
 * // utcSecond: 45
 * 
 * const londonSecond = D.getSecond(input, "Europe/London");
 * // londonSecond: 45
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getSecond(value, "UTC"),
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getSecond
 * 
 * @namespace D
 * 
 */
export declare function getSecond<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, timezone?: Timezone): number;
