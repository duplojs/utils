import type { SerializedTheDate } from "../types";
import { TheDate } from "../theDate";
/**
 * Returns the last day of the month for a date.
 * 
 * Signature: `getLastDayOfMonth(input)` → `TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-19");
 * const lastDay = D.getLastDayOfMonth(input);
 * // lastDay: TheDate
 * 
 * const serialized = D.serialize(lastDay);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.getLastDayOfMonth,
 * ); // TheDate
 * ```
 * 
 * @remarks
 * - The returned date is normalized to `23:59:59.999` in UTC.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getLastDayOfMonth
 * 
 * @namespace D
 * 
 */
export declare function getLastDayOfMonth<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput): TheDate;
