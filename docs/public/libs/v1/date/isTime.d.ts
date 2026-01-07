import { type TheTime } from "./types";
/**
 * Checks whether a string is a TheTime.
 * 
 * Signature: `isTime(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "time3600000+";
 * 
 * if (D.isTime(input)) {
 * 	// input: TheTime
 * }
 * 
 * const result = D.isTime("time3600000-");
 * // result: true
 * 
 * const result2 = D.isTime("time99999999999999999+");
 * // result2: false
 * ```
 * 
 * @remarks
 * - Validates the string format and the safe time range.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/isTime
 * 
 * @namespace D
 * 
 */
export declare function isTime(input: string): input is TheTime;
