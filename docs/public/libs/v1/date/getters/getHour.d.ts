import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import type { Timezone } from "../timezone";
/**
 * Returns the hour (`0` to `23`) for a date in a target timezone.
 * 
 * Signature: `getHour(input, timezone?)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.
 * 
 * ```ts
 * const input = D.create("2024-06-20", {
 * 	hour: "00",
 * });
 * const utcHour = D.getHour(input);
 * // utcHour: 0
 * 
 * const laHour = D.getHour(input, "America/Los_Angeles");
 * // laHour: 17
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getHour(value, "UTC"),
 * ); // 0
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getHour
 * 
 * @namespace D
 * 
 */
export declare function getHour<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, timezone?: Timezone): number;
