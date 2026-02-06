import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Subtracts a number of milliseconds from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractMilliseconds(input, millisecond)` → `TheDate`
 * - Curried: `subtractMilliseconds(millisecond)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractMilliseconds(input, 500);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.subtractMilliseconds(500),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractMilliseconds
 * 
 * @namespace D
 * 
 */
export declare function subtractMilliseconds<GenericInput extends TheDate | SerializedTheDate, GenericMillisecond extends number>(millisecond: GenericMillisecond): (input: GenericInput) => TheDate;
export declare function subtractMilliseconds<GenericInput extends TheDate | SerializedTheDate, GenericMillisecond extends number>(input: GenericInput, millisecond: GenericMillisecond): TheDate;
