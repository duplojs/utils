import { type SortType } from "../common";
import { type TheDate } from "./types";
/**
 * Sorts dates in ascending or descending order.
 * 
 * **Supported call styles:**
 * - Classic: `sort(array, type)` → returns a value
 * - Curried: `sort(type)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = [D.tomorrow(), D.yesterday(), D.today()] as const;
 * 
 * const result = D.sort(input, "ASC");
 * 
 * pipe(
 * 	input,
 * 	D.sort("ASC"),
 * );
 * 
 * ```
 * 
 * @remarks
 * - Sort order uses "ASC" or "DSC".
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/sort
 * 
 * @namespace D
 * 
 */
export declare function sort<GenericArray extends readonly TheDate[]>(type: SortType): (array: GenericArray) => TheDate[];
export declare function sort<GenericArray extends readonly TheDate[]>(array: GenericArray, type: SortType): TheDate[];
