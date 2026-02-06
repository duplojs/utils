import type { SerializedTheTime } from "./types";
/**
 * Checks whether a string is a valid `SerializedTheTime`.
 * 
 * Signature: `isSerializedTheTime(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "time5400000+";
 * 
 * if (D.isSerializedTheTime(input)) {
 * 	// input: SerializedTheTime
 * }
 * 
 * const result = D.isSerializedTheTime("time1-");
 * // result: true
 * 
 * const result2 = D.isSerializedTheTime("01:30:00");
 * // result2: false
 * ```
 * 
 * @remarks
 * - A valid serialized time follows the pattern `time${number}${"+" | "-"}` and must contain a safe time value.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/isSerializedTheTime
 * 
 * @namespace D
 * 
 */
export declare function isSerializedTheTime(input: string): input is SerializedTheTime;
