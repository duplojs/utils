import type { TheDate, Unit } from "./types";
export type RoundUnit = Exclude<Unit, "millisecond">;
/**
 * Rounds a date to a unit.
 * 
 * Signature: `round(input, unit)` → returns a value
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
 * const result = D.round(input);
 * // result: "date1718841600000+"
 * 
 * const result2 = D.round(input, "month");
 * // result2: "date1717200000000+"
 * 
 * pipe(
 * 	input,
 * 	D.round,
 * ); // result: "date1718841600000+"
 * 
 * ```
 * 
 * @remarks
 * - Rounds using the provided unit.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/round
 * 
 * @namespace D
 * 
 */
export declare function round(input: TheDate, unit?: RoundUnit): `date${number}-` | `date${number}+`;
