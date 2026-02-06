import { TheDate } from "./theDate";
/**
 * Returns the current instant as `TheDate`.
 * 
 * Signature: `now()` → `TheDate`
 * 
 * ```ts
 * const value = D.now();
 * // value: TheDate
 * 
 * const timestamp = value.getTime();
 * // timestamp: number
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/now
 * 
 * @namespace D
 * 
 */
export declare function now(): TheDate;
