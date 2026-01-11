import type { TheDate } from "./types";
import type { Timezone } from "./timezone";
/**
 * Formats a date.
 * 
 * **Supported call styles:**
 * - Classic: `format(input, formatString, timezone)` → returns a value
 * - Curried: `format(formatString, timezone)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const theDate = D.createOrThrow(1704067200123);
 * const fullFormat = D.format(theDate, "YYYY-MM-DD HH:mm:ss.SSS ZZ", "UTC");
 * // fullFormat: "2024-01-01 00:00:00.123 UTC"
 * 
 * pipe(
 * 	theDate,
 * 	D.format("YYYY-MM-DD HH:mm:ss.SSS ZZ", "UTC"),
 * ); // fullFormat: "2024-01-01 00:00:00.123 UTC"
 * 
 * ```
 * 
 * @remarks
 * - Supports tokens: YYYY, YY, MM, DD, HH, mm, ss, SSS, ZZ.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/format
 * 
 * @namespace D
 * 
 */
export declare function format<GenericInput extends TheDate, GenericFormat extends string, GenericTimezone extends Timezone>(formatString: GenericFormat, timezone: GenericTimezone): (input: GenericInput) => string;
export declare function format<GenericInput extends TheDate, GenericFormat extends string, GenericTimezone extends Timezone>(input: GenericInput, formatString: GenericFormat, timezone: GenericTimezone): string;
