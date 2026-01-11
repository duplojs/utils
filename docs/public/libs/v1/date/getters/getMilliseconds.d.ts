import { type TheDate } from "..";
/**
 * Returns the milliseconds of a date.
 * 
 * Signature: `getMilliseconds(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20", {
 * 	hour: "12",
 * 	minute: "34",
 * 	second: "56",
 * 	millisecond: "789",
 * });
 * const result = D.getMilliseconds(input);
 * // result: 789
 * 
 * pipe(
 * 	input,
 * 	D.getMilliseconds,
 * ); // result: 789
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getMilliseconds
 * 
 * @namespace D
 * 
 */
export declare function getMilliseconds<GenericInput extends TheDate>(input: GenericInput): number;
