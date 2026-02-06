import type { SerializedTheDate } from "../types";
import { TheDate } from "../theDate";
/**
 * Returns the first day of the week for a date.
 * 
 * Signature: `getFirstDayOfWeek(input)` → `TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-19");
 * const firstDay = D.getFirstDayOfWeek(input);
 * // firstDay: TheDate
 * 
 * const serialized = D.serialize(firstDay);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.getFirstDayOfWeek,
 * ); // TheDate
 * ```
 * 
 * @remarks
 * - The week starts on Monday.
 * - The returned date is normalized to `00:00:00.000` in UTC.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getFirstDayOfWeek
 * 
 * @namespace D
 * 
 */
export declare function getFirstDayOfWeek<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput): TheDate;
