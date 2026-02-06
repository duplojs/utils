import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Subtracts a number of calendar years from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractYears(input, year)` → `TheDate`
 * - Curried: `subtractYears(year)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.subtractYears(input, 1);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.subtractYears(1),
 * ); // TheDate
 * ```
 * 
 * @remarks
 * - Uses UTC year arithmetic (`Date#setUTCFullYear` behavior).
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractYears
 * 
 * @namespace D
 * 
 */
export declare function subtractYears<GenericInput extends TheDate | SerializedTheDate, GenericYear extends number>(year: GenericYear): (input: GenericInput) => TheDate;
export declare function subtractYears<GenericInput extends TheDate | SerializedTheDate, GenericYear extends number>(input: GenericInput, year: GenericYear): TheDate;
