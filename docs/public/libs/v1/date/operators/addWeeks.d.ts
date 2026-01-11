import type { TheDate } from "../types";
/**
 * Adds weeks to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addWeeks(input, week)` → returns a value
 * - Curried: `addWeeks(week)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-03");
 * const result = D.addWeeks(input, 2);
 * // result: "date1718841600000+"
 * 
 * pipe(
 * 	input,
 * 	D.addWeeks(2),
 * ); // result: "date1718841600000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addWeeks
 * 
 * @namespace D
 * 
 */
export declare function addWeeks<GenericInput extends TheDate, GenericWeek extends number>(week: GenericWeek): (input: GenericInput) => TheDate;
export declare function addWeeks<GenericInput extends TheDate, GenericWeek extends number>(input: GenericInput, week: GenericWeek): TheDate;
