import { type TheDate, type Timezone } from "..";
/**
 * Returns the month of a date.
 * 
 * Signature: `getMonth(input, timezone)` → returns a value
 * 
 * If timezone is omitted, UTC is used.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-12-31");
 * const result = D.getMonth(input);
 * // result: 12
 * 
 * const result2 = D.getMonth(input, "Asia/Tokyo");
 * // result2: 12
 * 
 * pipe(
 * 	input,
 * 	D.getMonth,
 * ); // result: 12
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getMonth
 * 
 * @namespace D
 * 
 */
export declare function getMonth<GenericInput extends TheDate>(input: GenericInput, timezone?: Timezone): number;
