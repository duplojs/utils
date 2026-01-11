import type { TheDate } from "../types";
/**
 * Adds days to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addDays(input, day)` → returns a value
 * - Curried: `addDays(day)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-15");
 * const result = D.addDays(input, 5);
 * // result: "date1718928000000+"
 * 
 * pipe(
 * 	input,
 * 	D.addDays(5),
 * ); // result: "date1718928000000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addDays
 * 
 * @namespace D
 * 
 */
export declare function addDays<GenericInput extends TheDate, GenericDay extends number>(day: GenericDay): (input: GenericInput) => TheDate;
export declare function addDays<GenericInput extends TheDate, GenericDay extends number>(input: GenericInput, day: GenericDay): TheDate;
