import type { TheDate, TheTime } from "../types";
/**
 * Adds a TheTime to a TheDate or TheTime.
 * 
 * **Supported call styles:**
 * - Classic: `addTime(input, time)` → returns a value
 * - Curried: `addTime(time)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const date = D.createTheDate(0);
 * const time = D.createTheTime(3_600_000);
 * 
 * const result = D.addTime(date, time);
 * // result: "date3600000+"
 * 
 * const result2 = D.addTime("time3000+", "time2000+");
 * // result2: "time5000+"
 * 
 * const result3 = pipe(
 * 	date,
 * 	D.addTime("time1000+"),
 * );
 * // result3: "date3601000+"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addTime
 * 
 * @namespace D
 * 
 */
export declare function addTime<GenericInput extends TheDate>(time: TheTime): (input: GenericInput) => TheDate;
export declare function addTime<GenericInput extends TheTime>(time: TheTime): (input: GenericInput) => TheTime;
export declare function addTime<GenericInput extends TheDate>(input: GenericInput, time: TheTime): TheDate;
export declare function addTime<GenericInput extends TheTime>(input: GenericInput, time: TheTime): TheTime;
