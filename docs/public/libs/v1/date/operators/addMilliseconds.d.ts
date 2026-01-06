import type { TheDate } from "../types";
/**
 * Adds milliseconds to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addMilliseconds(input, millisecond)` → returns a value
 * - Curried: `addMilliseconds(millisecond)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.addMilliseconds(input, 10);
 * // result: "date1718841600010+"
 * 
 * pipe(
 * 	input,
 * 	D.addMilliseconds(10),
 * ); // result: "date1718841600010+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addMilliseconds
 * 
 * @namespace D
 * 
 */
export declare function addMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(millisecond: GenericMillisecond): (input: GenericInput) => TheDate;
export declare function addMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(input: GenericInput, millisecond: GenericMillisecond): TheDate;
