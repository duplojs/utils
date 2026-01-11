import type { TheDate } from "../types";
/**
 * Adds seconds to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addSeconds(input, second)` → returns a value
 * - Curried: `addSeconds(second)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.addSeconds(input, 5);
 * // result: "date1718841605000+"
 * 
 * pipe(
 * 	input,
 * 	D.addSeconds(5),
 * ); // result: "date1718841605000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addSeconds
 * 
 * @namespace D
 * 
 */
export declare function addSeconds<GenericInput extends TheDate, GenericSecond extends number>(second: GenericSecond): (input: GenericInput) => TheDate;
export declare function addSeconds<GenericInput extends TheDate, GenericSecond extends number>(input: GenericInput, second: GenericSecond): TheDate;
