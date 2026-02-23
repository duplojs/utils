import { TheDate } from "./theDate";
import { TheTime } from "./theTime";
import type { SerializedTheDate, SerializedTheTime } from "./types";
/**
 * Converts a date or time value to native JavaScript representation.
 * 
 * Signature: `toNative(input)` → `Date | number`
 * 
 * `input` accepts `TheDate`, `SerializedTheDate`, `TheTime`, or `SerializedTheTime`.
 * 
 * ```ts
 * const dateInput = D.create("2024-06-20");
 * const nativeDate = D.toNative(dateInput);
 * // nativeDate: Date
 * 
 * const nativeDate2 = D.toNative("date1718841600000+");
 * // nativeDate2: Date
 * 
 * const timeInput = D.createTime(90000, "millisecond");
 * const timeValue = D.toNative(timeInput);
 * // timeValue: number
 * 
 * const timeValue2 = D.toNative("time3600000-");
 * // timeValue2: number
 * 
 * pipe(
 * 	timeInput,
 * 	D.toNative,
 * ); // number
 * ```
 * 
 * @remarks
 * - Returns `Date` for date inputs.
 * - Returns `number` for time inputs.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/toNative
 * 
 * @namespace D
 * 
 */
export declare function toNative<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput): Date;
export declare function toNative<GenericInput extends TheTime | SerializedTheTime>(input: GenericInput): number;
