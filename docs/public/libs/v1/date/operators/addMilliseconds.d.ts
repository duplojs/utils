import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Adds a number of milliseconds to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addMilliseconds(input, millisecond)` → `TheDate`
 * - Curried: `addMilliseconds(millisecond)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.addMilliseconds(input, 10);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.addMilliseconds(10),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addMilliseconds
 * 
 * @namespace D
 * 
 */
export declare function addMilliseconds<GenericInput extends TheDate | SerializedTheDate, GenericMillisecond extends number>(millisecond: GenericMillisecond): (input: GenericInput) => TheDate;
export declare function addMilliseconds<GenericInput extends TheDate | SerializedTheDate, GenericMillisecond extends number>(input: GenericInput, millisecond: GenericMillisecond): TheDate;
