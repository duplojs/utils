import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Subtracts a number of hours from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractHours(input, hour)` → `TheDate`
 * - Curried: `subtractHours(hour)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractHours(input, 6);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.subtractHours(6),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractHours
 * 
 * @namespace D
 * 
 */
export declare function subtractHours<GenericInput extends TheDate | SerializedTheDate, GenericHour extends number>(hour: GenericHour): (input: GenericInput) => TheDate;
export declare function subtractHours<GenericInput extends TheDate | SerializedTheDate, GenericHour extends number>(input: GenericInput, hour: GenericHour): TheDate;
