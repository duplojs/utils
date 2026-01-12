import type { TheDate } from "../types";
/**
 * Returns the last day of week of a date.
 * 
 * Signature: `getLastDayOfWeek(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-19");
 * const result = D.getLastDayOfWeek(input);
 * // result: "date1719187200000+" (Sunday 23 june 2024)
 * 
 * pipe(
 * 	input,
 * 	D.getLastDayOfWeek,
 * ); // result: "date1719187200000+" (Sunday 23 june 2024)
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getLastDayOfWeek
 * 
 * @namespace D
 * 
 */
export declare function getLastDayOfWeek(input: TheDate): TheDate;
