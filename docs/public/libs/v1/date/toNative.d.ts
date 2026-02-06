import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";
/**
 * Converts a date value to native JavaScript `Date`.
 * 
 * Signature: `toNative(input)` → `Date`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const nativeDate = D.toNative(input);
 * // nativeDate: Date
 * 
 * const nativeDate2 = D.toNative("date1718841600000+");
 * // nativeDate2: Date
 * 
 * pipe(
 * 	input,
 * 	D.toNative,
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/toNative
 * 
 * @namespace D
 * 
 */
export declare function toNative<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput): Date;
