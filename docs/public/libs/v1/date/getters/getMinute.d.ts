import { type TheDate, type Timezone } from "..";
/**
 * Returns the minute of a date.
 * 
 * Signature: `getMinute(input, timezone)` → returns a value
 * 
 * If timezone is omitted, UTC is used.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.getMinute(input);
 * // result: 0
 * 
 * const result2 = D.getMinute(input, "Europe/Madrid");
 * // result2: 0
 * 
 * pipe(
 * 	input,
 * 	D.getMinute,
 * ); // result: 0
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getMinute
 * 
 * @namespace D
 * 
 */
export declare function getMinute<GenericInput extends TheDate>(input: GenericInput, timezone?: Timezone): number;
