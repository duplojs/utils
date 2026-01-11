import type { TheDate } from "../types";
/**
 * Subtracts months from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractMonths(input, month)` → returns a value
 * - Curried: `subtractMonths(month)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-30");
 * const result = D.subtractMonths(input, 2);
 * // result: "date1711843200000+"
 * 
 * pipe(
 * 	input,
 * 	D.subtractMonths(2),
 * ); // result: "date1711843200000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractMonths
 * 
 * @namespace D
 * 
 */
export declare function subtractMonths<GenericInput extends TheDate, GenericMonth extends number>(month: GenericMonth): (input: GenericInput) => TheDate;
export declare function subtractMonths<GenericInput extends TheDate, GenericMonth extends number>(input: GenericInput, month: GenericMonth): TheDate;
