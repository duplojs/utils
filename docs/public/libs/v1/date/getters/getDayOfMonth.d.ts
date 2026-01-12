import { type TheDate, type Timezone } from "..";
/**
 * Returns the day of month of a date.
 * 
 * Signature: `getDayOfMonth(input, timezone)` → returns a value
 * 
 * If timezone is omitted, UTC is used.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-01");
 * const result = D.getDayOfMonth(input);
 * // result: 1
 * 
 * const result2 = D.getDayOfMonth(input, "America/New_York");
 * // result2: 1
 * 
 * pipe(
 * 	input,
 * 	D.getDayOfMonth,
 * ); // result: 1
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getDayOfMonth
 * 
 * @namespace D
 * 
 */
export declare function getDayOfMonth<GenericInput extends TheDate>(input: GenericInput, timezone?: Timezone): number;
