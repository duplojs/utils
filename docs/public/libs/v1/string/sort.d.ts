import { type SortType } from "../common";
/**
 * Sorts an array of strings in ascending or descending order.
 * 
 * **Supported call styles:**
 * - Classic: `sort(array, type)` → returns a new sorted array
 * - Curried: `sort(type)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 
 * ```ts
 * S.sort(
 * 	[
 * 		"zeta",
 * 		"alpha",
 * 		"beta",
 * 	],
 * 	"ASC",
 * ); // ["alpha", "beta", "zeta"]
 * 
 * pipe(
 * 	[
 * 		"zeta",
 * 		"alpha",
 * 	],
 * 	S.sort("DSC"),
 * ); // ["zeta", "alpha"]
 * 
 * S.sort(
 * 	[
 * 		"beta",
 * 		"alpha",
 * 	],
 * 	"ASC",
 * ); // ["alpha", "beta"]
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/sort
 * 
 * @namespace S
 * 
 */
export declare function sort<GenericArray extends readonly string[]>(type: SortType): (array: GenericArray) => string[];
export declare function sort<GenericArray extends readonly string[]>(array: GenericArray, type: SortType): string[];
