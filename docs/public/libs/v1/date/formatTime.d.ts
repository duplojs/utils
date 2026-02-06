import { type TheTime } from "./theTime";
import type { SerializedTheTime } from "./types";
/**
 * Formats a duration value with custom time tokens.
 * 
 * **Supported call styles:**
 * - Classic: `formatTime(input, formatString)` → `string`
 * - Curried: `formatTime(formatString)` → `(input) => string`
 * 
 * `input` accepts `TheTime` or `SerializedTheTime`.
 * 
 * ```ts
 * const input = D.createTime(788_645_006, "millisecond");
 * const full = D.formatTime(input, "WW DD HH:mm:ss.SSS");
 * // full: string
 * 
 * pipe(
 * 	input,
 * 	D.formatTime("HH:mm"),
 * ); // string
 * 
 * const negative = D.createTime(-5_000, "millisecond");
 * const short = D.formatTime(negative, "ss.SSS");
 * // short: string
 * ```
 * 
 * @remarks
 * - Supported tokens: `WW`, `DD`, `HH`, `mm`, `ss`, `SSS`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/formatTime
 * 
 * @namespace D
 * 
 */
export declare function formatTime<GenericInput extends TheTime | SerializedTheTime, GenericFormat extends string>(formatString: GenericFormat): (input: GenericInput) => string;
export declare function formatTime<GenericInput extends TheTime | SerializedTheTime, GenericFormat extends string>(input: GenericInput, formatString: GenericFormat): string;
