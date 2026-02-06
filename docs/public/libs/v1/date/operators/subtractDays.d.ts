import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Subtracts a number of days from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractDays(input, day)` → `TheDate`
 * - Curried: `subtractDays(day)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractDays(input, 3);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.subtractDays(3),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractDays
 * 
 * @namespace D
 * 
 */
export declare function subtractDays<GenericInput extends TheDate | SerializedTheDate, GenericDay extends number>(day: GenericDay): (input: GenericInput) => TheDate;
export declare function subtractDays<GenericInput extends TheDate | SerializedTheDate, GenericDay extends number>(input: GenericInput, day: GenericDay): TheDate;
