import { type TheDate, type Timezone } from "..";
/**
 * Returns the day of week of a date.
 * 
 * Signature: `getDayOfWeek(input, timezone)` → returns a value
 * 
 * If timezone is omitted, UTC is used.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-17");
 * const result = D.getDayOfWeek(input);
 * // result: 1
 * 
 * const result2 = D.getDayOfWeek(input, "Europe/London");
 * // result2: 1
 * 
 * pipe(
 * 	input,
 * 	D.getDayOfWeek,
 * ); // result: 1
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getDayOfWeek
 * 
 * @namespace D
 * 
 */
export declare function getDayOfWeek<GenericInput extends TheDate>(input: GenericInput, timezone?: Timezone): number;
