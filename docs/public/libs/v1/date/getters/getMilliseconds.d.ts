import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
/**
 * Returns the milliseconds part (`0` to `999`) of a date.
 * 
 * Signature: `getMilliseconds(input)` → `number`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const input = D.create("2024-06-20", {
 * 	hour: "12",
 * 	minute: "34",
 * 	second: "56",
 * 	millisecond: "789",
 * });
 * const milliseconds = D.getMilliseconds(input);
 * // milliseconds: 789
 * 
 * pipe(
 * 	input,
 * 	D.getMilliseconds,
 * ```
 * 
 * @remarks
 * - Value is always read in UTC.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getMilliseconds
 * 
 * @namespace D
 * 
 */
export declare function getMilliseconds<GenericInput extends TheDate | SerializedTheDate>(input: GenericInput): number;
