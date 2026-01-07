import { type TheTime } from "./types";
/**
 * Converts a TheTime to a millisecond value.
 * 
 * Signature: `toTimeValue(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.createTheTime(90_000);
 * const result = D.toTimeValue(input);
 * // result: 90000
 * 
 * const result2 = D.toTimeValue("time3600000-");
 * // result2: -3600000
 * 
 * const result3 = D.toTimeValue("time90000+");
 * // result3: 90000
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/toTimeValue
 * 
 * @namespace D
 * 
 */
export declare function toTimeValue<GenericInput extends TheTime>(input: GenericInput): number;
