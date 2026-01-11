import type { TheDate } from "./types";
/**
 * Converts a TheDate to a native Date.
 * 
 * Signature: `toNative(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2023-11-14");
 * const result = D.toNative(input);
 * // result: Date { time: 1699920000000 }
 * 
 * pipe(
 * 	input,
 * 	D.toNative,
 * ); // result: Date { time: 1699920000000 }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/toNative
 * 
 * @namespace D
 * 
 */
export declare function toNative<GenericInput extends TheDate>(input: GenericInput): Date;
