import type { SerializedTheDate, SerializedTheTime } from "../types";
import { TheDate } from "../theDate";
import { TheTime } from "../theTime";
/**
 * Subtracts a normalized duration (`TheTime` or `SerializedTheTime`) from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractTime(input, time)` → `TheDate | TheTime`
 * - Curried: `subtractTime(time)` → `(input) => TheDate | TheTime`
 * 
 * If `input` is `TheDate | SerializedTheDate`, the result is `TheDate`.
 * The operator also supports `TheTime | SerializedTheTime` as input and returns `TheTime`.
 * 
 * ```ts
 * const date = D.create("2024-06-20");
 * const time = D.createTime(1, "hour");
 * 
 * const result = D.subtractTime(date, time);
 * // result: TheDate
 * 
 * const result2 = D.subtractTime(time, D.createTime(30, "minute"));
 * // result2: TheTime
 * 
 * pipe(
 * 	date,
 * 	D.subtractTime(D.createTime(15, "minute")),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractTime
 * 
 * @namespace D
 * 
 */
export declare function subtractTime<GenericInput extends TheDate | SerializedTheDate>(time: TheTime | SerializedTheTime): (input: GenericInput) => TheDate;
export declare function subtractTime<GenericInput extends TheTime | SerializedTheTime>(time: TheTime | SerializedTheTime): (input: GenericInput) => TheTime;
export declare function subtractTime<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput, time: TheTime | SerializedTheTime): TheDate;
export declare function subtractTime<GenericInput extends TheTime | SerializedTheTime>(input: GenericInput, time: TheTime | SerializedTheTime): TheTime;
