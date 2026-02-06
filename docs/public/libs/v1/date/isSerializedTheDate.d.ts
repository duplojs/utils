import type { SerializedTheDate } from "./types";
/**
 * Checks whether a string is a valid `SerializedTheDate`.
 * 
 * Signature: `isSerializedTheDate(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "date1718841600000+";
 * 
 * if (D.isSerializedTheDate(input)) {
 * 	// input: SerializedTheDate
 * }
 * 
 * const result = D.isSerializedTheDate("date42-");
 * // result: true
 * 
 * const result2 = D.isSerializedTheDate("2024-06-20");
 * // result2: false
 * ```
 * 
 * @remarks
 * - A valid serialized date follows the pattern `date${number}${"+" | "-"}` and must contain a safe timestamp value.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/isSerializedTheDate
 * 
 * @namespace D
 * 
 */
export declare function isSerializedTheDate(input: string): input is SerializedTheDate;
