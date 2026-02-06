import { TheDate } from "./theDate";
/**
 * Returns an instant approximately one day before now as `TheDate`.
 * 
 * Signature: `yesterday()` → `TheDate`
 * 
 * ```ts
 * const value = D.yesterday();
 * // value: TheDate
 * 
 * const iso = D.toISOString(value);
 * // iso: string
 * 
 * ```
 * 
 * @remarks
 * - Computed from current timestamp minus one day in milliseconds.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/yesterday
 * 
 * @namespace D
 * 
 */
export declare function yesterday(): TheDate;
