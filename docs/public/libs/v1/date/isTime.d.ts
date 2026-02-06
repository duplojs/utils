import { TheTime } from "./theTime";
/**
 * Checks whether a value is an instance of `TheTime`.
 * 
 * Signature: `isTime(input)` → `input is TheTime`
 * 
 * ```ts
 * const input = D.createTime(1, "hour") as unknown;
 * 
 * if (D.isTime(input)) {
 * 	// input: TheTime
 * }
 * 
 * const result = D.isTime(D.create("2024-06-20"));
 * // result: false
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/isTime
 * 
 * @namespace D
 * 
 */
export declare function isTime(input: unknown): input is TheTime;
