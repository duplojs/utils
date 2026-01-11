import { type TheDate, type Timezone } from "..";
/**
 * Returns the second of a date.
 * 
 * Signature: `getSecond(input, timezone)` → returns a value
 * 
 * If timezone is omitted, UTC is used.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.getSecond(input);
 * // result: 0
 * 
 * const result2 = D.getSecond(input, "Asia/Seoul");
 * // result2: 0
 * 
 * pipe(
 * 	input,
 * 	D.getSecond,
 * ); // result: 0
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getSecond
 * 
 * @namespace D
 * 
 */
export declare function getSecond<GenericInput extends TheDate>(input: GenericInput, timezone?: Timezone): number;
