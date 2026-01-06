import type { TheDate } from "../types";
/**
 * Subtracts minutes from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractMinutes(input, minute)` → returns a value
 * - Curried: `subtractMinutes(minute)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractMinutes(input, 15);
 * // result: "date1718840700000+"
 * 
 * pipe(
 * 	input,
 * 	D.subtractMinutes(15),
 * ); // result: "date1718840700000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractMinutes
 * 
 * @namespace D
 * 
 */
export declare function subtractMinutes<GenericInput extends TheDate, GenericMinute extends number>(minute: GenericMinute): (input: GenericInput) => TheDate;
export declare function subtractMinutes<GenericInput extends TheDate, GenericMinute extends number>(input: GenericInput, minute: GenericMinute): TheDate;
