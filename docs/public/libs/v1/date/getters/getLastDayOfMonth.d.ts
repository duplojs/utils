import type { TheDate } from "../types";
/**
 * Returns the last day of month of a date.
 * 
 * Signature: `getLastDayOfMonth(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-19");
 * const result = D.getLastDayOfMonth(input);
 * // result: "date1719532800000+" (30 June 2024)
 * 
 * pipe(
 * 	input,
 * 	D.getLastDayOfMonth,
 * ); // result: "date1719532800000+" (30 June 2024)
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getLastDayOfMonth
 * 
 * @namespace D
 * 
 */
export declare function getLastDayOfMonth(input: TheDate): TheDate;
