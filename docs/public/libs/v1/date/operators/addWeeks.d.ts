import { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Adds a number of weeks to a date.
 * 
 * **Supported call styles:**
 * - Classic: `addWeeks(input, week)` → `TheDate`
 * - Curried: `addWeeks(week)` → `(input) => TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-03");
 * const result = D.addWeeks(input, 2);
 * // result: TheDate
 * 
 * const serialized = D.serialize(result);
 * // serialized: SerializedTheDate
 * 
 * pipe(
 * 	serialized,
 * 	D.addWeeks(2),
 * ); // TheDate
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/addWeeks
 * 
 * @namespace D
 * 
 */
export declare function addWeeks<GenericInput extends TheDate | SerializedTheDate, GenericWeek extends number>(week: GenericWeek): (input: GenericInput) => TheDate;
export declare function addWeeks<GenericInput extends TheDate | SerializedTheDate, GenericWeek extends number>(input: GenericInput, week: GenericWeek): TheDate;
