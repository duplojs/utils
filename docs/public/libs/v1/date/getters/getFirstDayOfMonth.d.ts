import type { TheDate } from "../types";
/**
 * Returns the first day of month of a date.
 * 
 * Signature: `getFirstDayOfMonth(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-19");
 * const result = D.getFirstDayOfMonth(input);
 * // result: "date1717200000000+" (1 June 2024)
 * 
 * pipe(
 * 	input,
 * 	D.getFirstDayOfMonth,
 * ); // result: "date1717200000000+" (1 June 2024)
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getFirstDayOfMonth
 * 
 * @namespace D
 * 
 */
export declare function getFirstDayOfMonth(input: TheDate): TheDate;
