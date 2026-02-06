import type { SerializedTheDate } from "../types";
import { TheDate } from "../theDate";
/**
 * Returns the last day of the week for a date.
 * 
 * Signature: `getLastDayOfWeek(input)` → `TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-19");
 * const lastDay = D.getLastDayOfWeek(input);
 * // lastDay: TheDate
 * 
 * const serialized = D.serialize(lastDay);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.getLastDayOfWeek,
 * ); // TheDate
 * ```
 * 
 * @remarks
 * - The week ends on Sunday.
 * - The returned date is normalized to `23:59:59.999` in UTC.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getLastDayOfWeek
 * 
 * @namespace D
 * 
 */
export declare function getLastDayOfWeek<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput): TheDate;
