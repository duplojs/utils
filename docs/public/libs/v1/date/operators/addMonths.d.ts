import type { TheDate } from "../types";
/**
 * Adds months to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addMonths(input, month)` → returns a value
 * - Curried: `addMonths(month)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-01-31");
 * const result = D.addMonths(input, 1);
 * // result: "date1709251200000+" (29 february 2024)
 * 
 * const addQuarter = D.addMonths(3);
 * const result2 = addQuarter(input);
 * // result2: "date1719782400000+" (30 april 2024)
 * 
 * pipe(
 * 	input,
 * 	D.addMonths(1),
 * ); // result: "date1709251200000+" (29 february 2024)
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addMonths
 * 
 * @namespace D
 * 
 */
export declare function addMonths<GenericInput extends TheDate, GenericMonth extends number>(month: GenericMonth): (input: GenericInput) => TheDate;
export declare function addMonths<GenericInput extends TheDate, GenericMonth extends number>(input: GenericInput, month: GenericMonth): TheDate;
