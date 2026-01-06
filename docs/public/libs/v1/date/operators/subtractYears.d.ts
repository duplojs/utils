import type { TheDate } from "../types";
/**
 * Subtracts years from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractYears(input, year)` → returns a value
 * - Curried: `subtractYears(year)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractYears(input, 1);
 * // result: "date1687219200000+"
 * 
 * pipe(
 * 	input,
 * 	D.subtractYears(1),
 * ); // result: "date1687219200000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractYears
 * 
 * @namespace D
 * 
 */
export declare function subtractYears<GenericInput extends TheDate, GenericYear extends number>(year: GenericYear): (input: GenericInput) => TheDate;
export declare function subtractYears<GenericInput extends TheDate, GenericYear extends number>(input: GenericInput, year: GenericYear): TheDate;
