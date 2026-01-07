import type { TheDate, TheTime } from "../types";
/**
 * Subtracts a TheTime from a TheDate or TheTime.
 * 
 * **Supported call styles:**
 * - Classic: `subtractTime(input, time)` → returns a value
 * - Curried: `subtractTime(time)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const date = D.createTheDate(0);
 * const time = D.createTheTime(3_600_000);
 * 
 * const result = D.subtractTime(date, time);
 * // result: "date3600000-"
 * 
 * const result2 = D.subtractTime("time5000+", "time2000+");
 * // result2: "time3000+"
 * 
 * const result3 = pipe(
 * 	date,
 * 	D.subtractTime("time1000+"),
 * );
 * // result3: "date3599000-"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractTime
 * 
 * @namespace D
 * 
 */
export declare function subtractTime<GenericInput extends TheDate>(time: TheTime): (input: GenericInput) => TheDate;
export declare function subtractTime<GenericInput extends TheTime>(time: TheTime): (input: GenericInput) => TheTime;
export declare function subtractTime<GenericInput extends TheDate>(input: GenericInput, time: TheTime): TheDate;
export declare function subtractTime<GenericInput extends TheTime>(input: GenericInput, time: TheTime): TheTime;
