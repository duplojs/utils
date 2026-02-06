import type { SerializedTheDate } from "../types";
import type { TheDate } from "../theDate";
import type { Timezone } from "../timezone";
/**
 * Returns the ISO week number (`1` to `53`) for a date in a target timezone.
 * 
 * Signature: `getWeekOfYear(input, timezone?)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. If `timezone` is omitted, UTC is used.
 * 
 * ```ts
 * const input = D.create("2024-01-04");
 * const utcWeek = D.getWeekOfYear(input);
 * // utcWeek: 1
 * 
 * const berlinWeek = D.getWeekOfYear(input, "Europe/Berlin");
 * // berlinWeek: 1
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getWeekOfYear(value, "UTC"),
 * ); // 1
 * 
 * ```
 * 
 * @remarks
 * - Uses ISO-8601 week rules (week aligned around Thursday logic).
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getWeekOfYear
 * 
 * @namespace D
 * 
 */
export declare function getWeekOfYear<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, timezone?: Timezone): number;
