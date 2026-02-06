import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Adds a number of seconds to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addSeconds(input, second)` → `TheDate`
 * - Curried: `addSeconds(second)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.addSeconds(input, 5);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.addSeconds(5),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addSeconds
 * 
 * @namespace D
 * 
 */
export declare function addSeconds<GenericInput extends TheDate | SerializedTheDate, GenericSecond extends number>(second: GenericSecond): (input: GenericInput) => TheDate;
export declare function addSeconds<GenericInput extends TheDate | SerializedTheDate, GenericSecond extends number>(input: GenericInput, second: GenericSecond): TheDate;
