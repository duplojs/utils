import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Adds a number of calendar years to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addYears(input, year)` → `TheDate`
 * - Curried: `addYears(year)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2020-02-29");
 * const result = D.addYears(input, 4);
 * // result: TheDate
 * 
 * pipe(
 * 	input,
 * 	D.addYears(4),
 * ); // TheDate
 * 
 * ```
 * 
 * @remarks
 * - Uses UTC year arithmetic (`Date#setUTCFullYear` behavior).
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addYears
 * 
 * @namespace D
 * 
 */
export declare function addYears<GenericInput extends TheDate | SerializedTheDate, GenericYear extends number>(year: GenericYear): (input: GenericInput) => TheDate;
export declare function addYears<GenericInput extends TheDate | SerializedTheDate, GenericYear extends number>(input: GenericInput, year: GenericYear): TheDate;
