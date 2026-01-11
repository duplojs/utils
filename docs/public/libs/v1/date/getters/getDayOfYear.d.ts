import { type TheDate, type Timezone } from "..";
/**
 * Returns the day of year of a date.
 * 
 * Signature: `getDayOfYear(input, timezone)` → returns a value
 * 
 * If timezone is omitted, UTC is used.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-12-31");
 * const result = D.getDayOfYear(input, "Australia/Sydney");
 * // result: 366
 * 
 * pipe(
 * 	input,
 * 	(value) => D.getDayOfYear(value, "Australia/Sydney"),
 * ); // result: 366
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getDayOfYear
 * 
 * @namespace D
 * 
 */
export declare function getDayOfYear<GenericInput extends TheDate>(input: GenericInput, timezone?: Timezone): number;
