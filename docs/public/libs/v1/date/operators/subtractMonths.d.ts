import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Subtracts a number of calendar months from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractMonths(input, month)` → `TheDate`
 * - Curried: `subtractMonths(month)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-30");
 * const result = D.subtractMonths(input, 2);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.subtractMonths(2),
 * ); // TheDate
 * ```
 * 
 * @remarks
 * - Uses UTC month arithmetic (`Date#setUTCMonth` behavior).
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractMonths
 * 
 * @namespace D
 * 
 */
export declare function subtractMonths<GenericInput extends TheDate | SerializedTheDate, GenericMonth extends number>(month: GenericMonth): (input: GenericInput) => TheDate;
export declare function subtractMonths<GenericInput extends TheDate | SerializedTheDate, GenericMonth extends number>(input: GenericInput, month: GenericMonth): TheDate;
