import { TheTime } from "./theTime";
import type { SerializedTheTime } from "./types";
/**
 * Converts a duration value to a numeric millisecond time value.
 * 
 * Signature: `toTimeValue(input)` → `number`
 * 
 * `input` accepts `TheTime` or `SerializedTheTime`.
 * 
 * ```ts
 * const input = D.createTime(90_000, "millisecond");
 * const value = D.toTimeValue(input);
 * // value: number
 * 
 * const value2 = D.toTimeValue("time3600000-");
 * // value2: number
 * 
 * pipe(
 * 	input,
 * 	D.toTimeValue,
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/toTimeValue
 * 
 * @namespace D
 * 
 */
export declare function toTimeValue<GenericInput extends TheTime | SerializedTheTime>(input: GenericInput): number;
