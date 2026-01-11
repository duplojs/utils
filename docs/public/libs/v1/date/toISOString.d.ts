import type { TheDate } from "./types";
/**
 * Converts a date to an ISO string.
 * 
 * Signature: `toISOString(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2023-11-14");
 * const result = D.toISOString(input);
 * // result: "2023-11-14T00:00:00.000Z"
 * 
 * pipe(
 * 	input,
 * 	D.toISOString,
 * ); // result: "2023-11-14T00:00:00.000Z"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/toISOString
 * 
 * @namespace D
 * 
 */
export declare function toISOString<GenericInput extends TheDate>(input: GenericInput): string;
