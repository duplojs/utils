import { TheDate } from "./theDate";
/**
 * Returns an instant approximately one day after now as `TheDate`.
 * 
 * Signature: `tomorrow()` → `TheDate`
 * 
 * ```ts
 * const value = D.tomorrow();
 * // value: TheDate
 * 
 * const iso = D.toISOString(value);
 * // iso: string
 * 
 * ```
 * 
 * @remarks
 * - Computed from current timestamp plus one day in milliseconds.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/tomorrow
 * 
 * @namespace D
 * 
 */
export declare function tomorrow(): TheDate;
