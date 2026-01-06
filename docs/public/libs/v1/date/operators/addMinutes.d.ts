import type { TheDate } from "../types";
/**
 * Adds minutes to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addMinutes(input, minute)` → returns a value
 * - Curried: `addMinutes(minute)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.addMinutes(input, 45);
 * // result: "date1718844300000+"
 * 
 * pipe(
 * 	input,
 * 	D.addMinutes(45),
 * ); // result: "date1718844300000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addMinutes
 * 
 * @namespace D
 * 
 */
export declare function addMinutes<GenericInput extends TheDate, GenericMinute extends number>(minute: GenericMinute): (input: GenericInput) => TheDate;
export declare function addMinutes<GenericInput extends TheDate, GenericMinute extends number>(input: GenericInput, minute: GenericMinute): TheDate;
