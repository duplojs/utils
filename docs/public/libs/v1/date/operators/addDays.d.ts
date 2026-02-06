import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Adds a number of days to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addDays(input, day)` → `TheDate`
 * - Curried: `addDays(day)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-15");
 * const result = D.addDays(input, 5);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.addDays(5),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addDays
 * 
 * @namespace D
 * 
 */
export declare function addDays<GenericInput extends TheDate | SerializedTheDate, GenericDay extends number>(day: GenericDay): (input: GenericInput) => TheDate;
export declare function addDays<GenericInput extends TheDate | SerializedTheDate, GenericDay extends number>(input: GenericInput, day: GenericDay): TheDate;
