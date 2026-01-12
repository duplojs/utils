import type { TheDate } from "../types";
/**
 * Returns the first day of week of a date.
 * 
 * Signature: `getFirstDayOfWeek(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-19");
 * const result = D.getFirstDayOfWeek(input);
 * // result: "date1718668800000+" (monday 17 june 2024)
 * 
 * pipe(
 * 	input,
 * 	D.getFirstDayOfWeek,
 * ); // result: "date1718668800000+" (monday 17 june 2024)
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getFirstDayOfWeek
 * 
 * @namespace D
 * 
 */
export declare function getFirstDayOfWeek(input: TheDate): TheDate;
