import type { TheDate } from "../types";
/**
 * Subtracts weeks from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractWeeks(input, week)` → returns a value
 * - Curried: `subtractWeeks(week)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-30");
 * const result = D.subtractWeeks(input, 4);
 * // result: "date1716076800000+"
 * 
 * pipe(
 * 	input,
 * 	D.subtractWeeks(4),
 * ); // result: "date1716076800000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractWeeks
 * 
 * @namespace D
 * 
 */
export declare function subtractWeeks<GenericInput extends TheDate, GenericWeek extends number>(week: GenericWeek): (input: GenericInput) => TheDate;
export declare function subtractWeeks<GenericInput extends TheDate, GenericWeek extends number>(input: GenericInput, week: GenericWeek): TheDate;
