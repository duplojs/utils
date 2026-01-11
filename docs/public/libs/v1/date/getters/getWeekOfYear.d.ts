import { type TheDate, type Timezone } from "..";
/**
 * Returns the week of year of a date.
 * 
 * Signature: `getWeekOfYear(input, timezone)` → returns a value
 * 
 * If timezone is omitted, UTC is used.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-01-04");
 * const result = D.getWeekOfYear(input, "Europe/Berlin");
 * // result: 1
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getWeekOfYear(value, "Europe/Berlin"),
 * ); // result: 1
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getWeekOfYear
 * 
 * @namespace D
 * 
 */
export declare function getWeekOfYear<GenericInput extends TheDate>(input: GenericInput, timezone?: Timezone): number;
