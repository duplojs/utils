import type { TheDate } from "../types";
/**
 * Subtracts days from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractDays(input, day)` → returns a value
 * - Curried: `subtractDays(day)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractDays(input, 3);
 * // result: "date1718582400000+"
 * 
 * pipe(
 * 	input,
 * 	D.subtractDays(3),
 * ); // result: "date1718582400000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractDays
 * 
 * @namespace D
 * 
 */
export declare function subtractDays<GenericInput extends TheDate, GenericDay extends number>(day: GenericDay): (input: GenericInput) => TheDate;
export declare function subtractDays<GenericInput extends TheDate, GenericDay extends number>(input: GenericInput, day: GenericDay): TheDate;
