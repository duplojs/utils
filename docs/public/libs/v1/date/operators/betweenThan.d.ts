import type { TheDate } from "../types";
/**
 * Checks whether a date is between two dates (exclusive).
 * 
 * **Supported call styles:**
 * - Classic: `betweenThan(input, greater, less)` → returns a value
 * - Curried: `betweenThan(greater, less)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const start = D.create("2024-06-01");
 * const end = D.create("2024-06-30");
 * const input = D.create("2024-06-30");
 * 
 * const result = D.betweenThan(input, start, end);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.betweenThan(start, end),
 * ); // result: true
 * 
 * ```
 * 
 * @remarks
 * - Bounds are exclusive.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/betweenThan
 * 
 * @namespace D
 * 
 */
export declare function betweenThan<GenericValue extends TheDate>(greater: TheDate, less: TheDate): (input: GenericValue) => boolean;
export declare function betweenThan<GenericValue extends TheDate>(input: GenericValue, greater: TheDate, less: TheDate): boolean;
