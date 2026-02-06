import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";
/**
 * Converts a date value to ISO-8601 string.
 * 
 * Signature: `toISOString(input)` → `string`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const iso = D.toISOString(input);
 * // iso: string
 * 
 * const iso2 = D.toISOString("date1718841600000+");
 * // iso2: string
 * 
 * pipe(
 * 	input,
 * 	D.toISOString,
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/toISOString
 * 
 * @namespace D
 * 
 */
export declare function toISOString<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput): string;
