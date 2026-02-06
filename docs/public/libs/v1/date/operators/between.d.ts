import { type TheDate } from "../theDate";
import { type SerializedTheDate } from "../types";
/**
 * Checks whether a date is inside an inclusive range.
 * 
 * **Supported call styles:**
 * - Classic: `between(input, greater, less)` → `boolean`
 * - Curried: `between(greater, less)` → `(input) => boolean`
 * 
 * All parameters accept `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const start = D.create("2024-06-01");
 * const end = D.create("2024-06-30");
 * const input = D.create("2024-06-30");
 * 
 * const result = D.between(input, start, end);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.between(start, end),
 * ); // true
 * ```
 * 
 * @remarks
 * - Inclusive bounds: `input >= greater && input <= less`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/between
 * 
 * @namespace D
 * 
 */
export declare function between<GenericValue extends TheDate | SerializedTheDate>(greater: TheDate | SerializedTheDate, less: TheDate | SerializedTheDate): (input: GenericValue) => boolean;
export declare function between<GenericValue extends TheDate | SerializedTheDate>(input: GenericValue, greater: TheDate | SerializedTheDate, less: TheDate | SerializedTheDate): boolean;
