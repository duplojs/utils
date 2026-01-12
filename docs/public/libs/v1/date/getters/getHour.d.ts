import { type TheDate, type Timezone } from "..";
/**
 * Returns the hour of a date.
 * 
 * Signature: `getHour(input, timezone)` → returns a value
 * 
 * If timezone is omitted, UTC is used.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.getHour(input);
 * // result: 0
 * 
 * const result2 = D.getHour(input, "America/Los_Angeles");
 * // result2: 17
 * 
 * pipe(
 * 	input,
 * 	D.getHour,
 * ); // result: 0
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getHour
 * 
 * @namespace D
 * 
 */
export declare function getHour<GenericInput extends TheDate>(input: GenericInput, timezone?: Timezone): number;
