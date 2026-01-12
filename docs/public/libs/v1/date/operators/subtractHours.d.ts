import type { TheDate } from "../types";
/**
 * Subtracts hours from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractHours(input, hour)` → returns a value
 * - Curried: `subtractHours(hour)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractHours(input, 6);
 * // result: "date1718820000000+"
 * 
 * pipe(
 * 	input,
 * 	D.subtractHours(6),
 * ); // result: "date1718820000000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractHours
 * 
 * @namespace D
 * 
 */
export declare function subtractHours<GenericInput extends TheDate, GenericHour extends number>(hour: GenericHour): (input: GenericInput) => TheDate;
export declare function subtractHours<GenericInput extends TheDate, GenericHour extends number>(input: GenericInput, hour: GenericHour): TheDate;
