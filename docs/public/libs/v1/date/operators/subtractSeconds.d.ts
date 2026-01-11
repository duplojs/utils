import type { TheDate } from "../types";
/**
 * Subtracts seconds from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractSeconds(input, second)` → returns a value
 * - Curried: `subtractSeconds(second)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractSeconds(input, 30);
 * // result: "date1718841570000+"
 * 
 * pipe(
 * 	input,
 * 	D.subtractSeconds(30),
 * ); // result: "date1718841570000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractSeconds
 * 
 * @namespace D
 * 
 */
export declare function subtractSeconds<GenericInput extends TheDate, GenericSecond extends number>(second: GenericSecond): (input: GenericInput) => TheDate;
export declare function subtractSeconds<GenericInput extends TheDate, GenericSecond extends number>(input: GenericInput, second: GenericSecond): TheDate;
