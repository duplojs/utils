import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import type { Timezone } from "../timezone";
/**
 * Returns the year for a date in a target timezone.
 * 
 * Signature: `getYear(input, timezone?)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.
 * 
 * ```ts
 * const input = D.create("2024-12-31", {
 * 	hour: "23",
 * 	minute: "30",
 * });
 * const utcYear = D.getYear(input);
 * // utcYear: 2024
 * 
 * const tokyoYear = D.getYear(input, "Asia/Tokyo");
 * // tokyoYear: 2025
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getYear(value, "UTC"),
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getYear
 * 
 * @namespace D
 * 
 */
export declare function getYear<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, timezone?: Timezone): number;
