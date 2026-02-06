import { TheDate } from "./theDate";
/**
 * Returns current day at UTC midnight as `TheDate`.
 * 
 * Signature: `today()` → `TheDate`
 * 
 * ```ts
 * const value = D.today();
 * // value: TheDate
 * 
 * const hour = D.getHour(value);
 * // hour: 0
 * 
 * const serialized = D.serialize(value);
 * // serialized: SerializedTheDate
 * ```
 * 
 * @remarks
 * - Time part is normalized to `00:00:00.000` UTC.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/today
 * 
 * @namespace D
 * 
 */
export declare function today(): TheDate;
