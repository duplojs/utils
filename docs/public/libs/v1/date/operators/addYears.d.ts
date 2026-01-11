import type { TheDate } from "../types";
/**
 * Adds years to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addYears(input, year)` → returns a value
 * - Curried: `addYears(year)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2020-02-29");
 * const result = D.addYears(input, 4);
 * // result: "date1766707200000+" (29 february 2024)
 * 
 * const addOneYear = D.addYears(1);
 * const result2 = addOneYear(input);
 * // result2: "date1646006400000+" (28 february 2023)
 * 
 * pipe(
 * 	input,
 * 	D.addYears(4),
 * ); // result: "date1766707200000+" (29 february 2024)
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addYears
 * 
 * @namespace D
 * 
 */
export declare function addYears<GenericInput extends TheDate, GenericYear extends number>(year: GenericYear): (input: GenericInput) => TheDate;
export declare function addYears<GenericInput extends TheDate, GenericYear extends number>(input: GenericInput, year: GenericYear): TheDate;
