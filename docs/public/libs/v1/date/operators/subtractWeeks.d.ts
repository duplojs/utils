import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Subtracts a number of weeks from a date.
 * 
 * **Supported call styles:**
 * - Classic: `subtractWeeks(input, week)` → `TheDate`
 * - Curried: `subtractWeeks(week)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-30");
 * const result = D.subtractWeeks(input, 4);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.subtractWeeks(4),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/subtractWeeks
 * 
 * @namespace D
 * 
 */
export declare function subtractWeeks<GenericInput extends TheDate | SerializedTheDate, GenericWeek extends number>(week: GenericWeek): (input: GenericInput) => TheDate;
export declare function subtractWeeks<GenericInput extends TheDate | SerializedTheDate, GenericWeek extends number>(input: GenericInput, week: GenericWeek): TheDate;
