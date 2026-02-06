import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Adds a number of hours to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addHours(input, hour)` → `TheDate`
 * - Curried: `addHours(hour)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.addHours(input, 2);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.addHours(2),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addHours
 * 
 * @namespace D
 * 
 */
export declare function addHours<GenericInput extends TheDate | SerializedTheDate, GenericHour extends number>(hour: GenericHour): (input: GenericInput) => TheDate;
export declare function addHours<GenericInput extends TheDate | SerializedTheDate, GenericHour extends number>(input: GenericInput, hour: GenericHour): TheDate;
