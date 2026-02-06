import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";
/**
 * Converts a date value to UTC timestamp (milliseconds).
 * 
 * Signature: `toTimestamp(input)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const timestamp = D.toTimestamp(input);
 * // timestamp: number
 * 
 * const timestamp2 = D.toTimestamp("date1718841600000+");
 * // timestamp2: number
 * 
 * pipe(
 * 	input,
 * 	D.toTimestamp,
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/toTimestamp
 * 
 * @namespace D
 * 
 */
export declare function toTimestamp<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput): number;
