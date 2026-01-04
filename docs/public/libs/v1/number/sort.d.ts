import { type SortType } from "../common";
/**
 * Sorts numbers in ascending or descending order.
 * 
 * **Supported call styles:**
 * - Classic: `sort(array, type)` → returns a new array
 * - Curried: `sort(type)` → returns a function waiting for the array
 * 
 * @example
 * ```ts
 * N.sort(
 * 	[3, 1, 2],
 * 	"ASC",
 * ); // [1, 2, 3]
 * 
 * pipe(
 * 	[3, 1, 2],
 * 	N.sort("DSC"),
 * ); // [3, 2, 1]
 * 
 * N.sort(
 * 	[1, 2, 3],
 * 	"DSC",
 * ); // [3, 2, 1]
 * 
 * ```
 * @remarks
 * - Does not mutate the input array
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number/sort
 * 
 * @namespace N
 * 
 */
export declare function sort<GenericArray extends readonly number[]>(type: SortType): (array: GenericArray) => number[];
export declare function sort<GenericArray extends readonly number[]>(array: GenericArray, type: SortType): number[];
