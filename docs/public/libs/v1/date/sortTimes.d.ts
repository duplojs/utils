import { type SortType } from "../common";
import { type TheTime } from "./types";
/**
 * Sorts time values in ascending or descending order.
 * 
 * **Supported call styles:**
 * - Classic: `sortTimes(array, type)` → returns a value
 * - Curried: `sortTimes(type)` → returns a function waiting for the input
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = [
 * 	D.createTheTime(3_000),
 * 	D.createTheTime(1_000),
 * 	D.createTheTime(2_000),
 * ];
 * 
 * const result = D.sortTimes(input, "ASC");
 * // result: ["time1000+", "time2000+", "time3000+"]
 * 
 * const result2 = D.sortTimes(input, "DSC");
 * // result2: ["time3000+", "time2000+", "time1000+"]
 * 
 * pipe(
 * 	input,
 * 	D.sortTimes("ASC"),
 * ); // result: ["time1000+", "time2000+", "time3000+"]
 * ```
 * 
 * @remarks
 * - Sort order uses "ASC" or "DSC".
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/sortTimes
 * 
 * @namespace D
 * 
 */
export declare function sortTimes<GenericArray extends readonly TheTime[]>(type: SortType): (array: GenericArray) => TheTime[];
export declare function sortTimes<GenericArray extends readonly TheTime[]>(array: GenericArray, type: SortType): TheTime[];
