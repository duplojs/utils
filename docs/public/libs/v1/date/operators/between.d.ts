import type { TheDate } from "../types";
/**
 * Checks whether a date is between two dates (inclusive).
 * 
 * **Supported call styles:**
 * - Classic: `between(input, greater, less)` → returns a value
 * - Curried: `between(greater, less)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const start = D.create("2024-06-01");
 * const end = D.create("2024-06-30");
 * const input = D.create("2024-06-15");
 * 
 * const result = D.between(input, start, end);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.between(start, end),
 * ); // result: true
 * 
 * ```
 * 
 * @remarks
 * - Bounds are inclusive.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/between
 * 
 * @namespace D
 * 
 */
export declare function between<GenericValue extends TheDate>(greater: TheDate, less: TheDate): (input: GenericValue) => boolean;
export declare function between<GenericValue extends TheDate>(input: GenericValue, greater: TheDate, less: TheDate): boolean;
