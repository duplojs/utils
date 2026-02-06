import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Subtracts a number of seconds from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractSeconds(input, second)` → `TheDate`
 * - Curried: `subtractSeconds(second)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractSeconds(input, 30);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.subtractSeconds(30),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractSeconds
 * 
 * @namespace D
 * 
 */
export declare function subtractSeconds<GenericInput extends TheDate | SerializedTheDate, GenericSecond extends number>(second: GenericSecond): (input: GenericInput) => TheDate;
export declare function subtractSeconds<GenericInput extends TheDate | SerializedTheDate, GenericSecond extends number>(input: GenericInput, second: GenericSecond): TheDate;
