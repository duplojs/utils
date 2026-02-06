import { TheDate } from "../theDate";
import { TheTime } from "../theTime";
import type { SerializedTheDate, SerializedTheTime } from "../types";
/**
 * Adds a normalized duration (`TheTime` or `SerializedTheTime`) to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addTime(input, time)` → `TheDate | TheTime`
 * - Curried: `addTime(time)` → `(input) => TheDate | TheTime`
 * 
 * If `input` is `TheDate | SerializedTheDate`, the result is `TheDate`.
 * The operator also supports `TheTime | SerializedTheTime` as input and returns `TheTime`.
 * 
 * ```ts
 * const date = D.create("2024-06-20");
 * const time = D.createTime(1, "hour");
 * 
 * const result = D.addTime(date, time);
 * // result: TheDate
 * 
 * const result2 = D.addTime(time, D.createTime(30, "minute"));
 * // result2: TheTime
 * 
 * pipe(
 * 	date,
 * 	D.addTime(D.createTime(15, "minute")),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addTime
 * 
 * @namespace D
 * 
 */
export declare function addTime<GenericInput extends TheDate | SerializedTheDate>(time: TheTime | SerializedTheTime): (input: GenericInput) => TheDate;
export declare function addTime<GenericInput extends TheTime | SerializedTheTime>(time: TheTime | SerializedTheTime): (input: GenericInput) => TheTime;
export declare function addTime<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, time: TheTime | SerializedTheTime): TheDate;
export declare function addTime<GenericInput extends TheTime | SerializedTheTime>(input: GenericInput, time: TheTime | SerializedTheTime): TheTime;
