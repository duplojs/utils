import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Subtracts a number of minutes from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractMinutes(input, minute)` → `TheDate`
 * - Curried: `subtractMinutes(minute)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractMinutes(input, 15);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.subtractMinutes(15),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractMinutes
 * 
 * @namespace D
 * 
 */
export declare function subtractMinutes<GenericInput extends TheDate | SerializedTheDate, GenericMinute extends number>(minute: GenericMinute): (input: GenericInput) => TheDate;
export declare function subtractMinutes<GenericInput extends TheDate | SerializedTheDate, GenericMinute extends number>(input: GenericInput, minute: GenericMinute): TheDate;
