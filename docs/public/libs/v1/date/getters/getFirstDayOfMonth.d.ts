import type { SerializedTheDate } from "../types";
import { TheDate } from "../theDate";
/**
 * Returns the first day of the month for a date.
 * 
 * Signature: `getFirstDayOfMonth(input)` → `TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-19");
 * const firstDay = D.getFirstDayOfMonth(input);
 * // firstDay: TheDate
 * 
 * const serialized = D.serialize(firstDay);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.getFirstDayOfMonth,
 * ); // TheDate
 * ```
 * 
 * @remarks
 * - The returned date is normalized to `00:00:00.000` in UTC.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getFirstDayOfMonth
 * 
 * @namespace D
 * 
 */
export declare function getFirstDayOfMonth<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput): TheDate;
