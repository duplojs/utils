import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Adds a number of minutes to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addMinutes(input, minute)` → `TheDate`
 * - Curried: `addMinutes(minute)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.addMinutes(input, 45);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.addMinutes(45),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addMinutes
 * 
 * @namespace D
 * 
 */
export declare function addMinutes<GenericInput extends TheDate | SerializedTheDate, GenericMinute extends number>(minute: GenericMinute): (input: GenericInput) => TheDate;
export declare function addMinutes<GenericInput extends TheDate | SerializedTheDate, GenericMinute extends number>(input: GenericInput, minute: GenericMinute): TheDate;
