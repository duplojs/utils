import type { TheDate } from "../types";
/**
 * Subtracts milliseconds from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractMilliseconds(input, millisecond)` → returns a value
 * - Curried: `subtractMilliseconds(millisecond)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractMilliseconds(input, 500);
 * // result: "date1718841599500+"
 * 
 * pipe(
 * 	input,
 * 	D.subtractMilliseconds(500),
 * ); // result: "date1718841599500+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractMilliseconds
 * 
 * @namespace D
 * 
 */
export declare function subtractMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(millisecond: GenericMillisecond): (input: GenericInput) => TheDate;
export declare function subtractMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(input: GenericInput, millisecond: GenericMillisecond): TheDate;
