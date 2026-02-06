import { type TheDate } from "./theDate";
import type { Timezone } from "./timezone";
import type { SerializedTheDate } from "./types";
/**
 * Formats a date with custom tokens in a target timezone.
 * 
 * **Supported call styles:**
 * - Classic: `format(input, formatString, timezone)` → `string`
 * - Curried: `format(formatString, timezone)` → `(input) => string`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-01-01", {
 * 	hour: "00",
 * 	minute: "00",
 * 	second: "00",
 * 	millisecond: "123",
 * });
 * 
 * const full = D.format(input, "YYYY-MM-DD HH:mm:ss.SSS ZZ", "UTC");
 * // full: string
 * 
 * ```
 * 
 * @remarks
 * - Supported tokens: `YYYY`, `YY`, `MM`, `DD`, `HH`, `mm`, `ss`, `SSS`, `ZZ`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/format
 * 
 * @namespace D
 * 
 */
export declare function format<GenericInput extends TheDate | SerializedTheDate, GenericFormat extends string, GenericTimezone extends Timezone>(formatString: GenericFormat, timezone: GenericTimezone): (input: GenericInput) => string;
export declare function format<GenericInput extends TheDate | SerializedTheDate, GenericFormat extends string, GenericTimezone extends Timezone>(input: GenericInput, formatString: GenericFormat, timezone: GenericTimezone): string;
