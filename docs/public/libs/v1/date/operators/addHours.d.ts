import type { TheDate } from "../types";
/**
 * Adds hours to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addHours(input, hour)` → returns a value
 * - Curried: `addHours(hour)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.addHours(input, 2);
 * // result: "date1718848800000+"
 * 
 * pipe(
 * 	input,
 * 	D.addHours(2),
 * ); // result: "date1718848800000+"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addHours
 * 
 * @namespace D
 * 
 */
export declare function addHours<GenericInput extends TheDate, GenericHour extends number>(hour: GenericHour): (input: GenericInput) => TheDate;
export declare function addHours<GenericInput extends TheDate, GenericHour extends number>(input: GenericInput, hour: GenericHour): TheDate;
