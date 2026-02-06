import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Adds a number of calendar months to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addMonths(input, month)` → `TheDate`
 * - Curried: `addMonths(month)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-01-31");
 * const result = D.addMonths(input, 1);
 * // result: TheDate
 * 
 * pipe(
 * 	input,
 * 	D.addMonths(1),
 * ); // TheDate
 * 
 * ```
 * 
 * @remarks
 * - Uses UTC month arithmetic (`Date#setUTCMonth` behavior).
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addMonths
 * 
 * @namespace D
 * 
 */
export declare function addMonths<GenericInput extends TheDate | SerializedTheDate, GenericMonth extends number>(month: GenericMonth): (input: GenericInput) => TheDate;
export declare function addMonths<GenericInput extends TheDate | SerializedTheDate, GenericMonth extends number>(input: GenericInput, month: GenericMonth): TheDate;
