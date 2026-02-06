import { TheDate } from "./theDate";
import type { SerializedTheDate, Unit } from "./types";
export type RoundUnit = Exclude<Unit, "millisecond">;
/**
 * Rounds down a date to a UTC unit boundary.
 * 
 * Signature: `round(input, unit?)` → `TheDate`
 * 
 * `input` accepts `TheDate` or `SerializedTheDate`. Default `unit` is `"day"`.
 * 
 * ```ts
 * const input = D.create("2024-06-20", {
 * 	hour: "12",
 * 	minute: "34",
 * 	second: "56",
 * 	millisecond: "789",
 * });
 * 
 * const byDay = D.round(input);
 * // byDay: TheDate
 * 
 * const byMonth = D.round(input, "month");
 * // byMonth: TheDate
 * 
 * ```
 * 
 * @remarks
 * - Supported units: `second`, `minute`, `hour`, `day`, `month`, `year`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/round
 * 
 * @namespace D
 * 
 */
export declare function round(input: (TheDate | SerializedTheDate), unit?: RoundUnit): TheDate;
