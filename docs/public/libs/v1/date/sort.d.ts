import type { SortType } from "../common/types/sortType";
import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";
/**
 * Sorts date values and returns normalized `TheDate[]`.
 * 
 * **Supported call styles:**
 * - Classic: `sort(array, type)` → `TheDate[]`
 * - Curried: `sort(type)` → `(array) => TheDate[]`
 * 
 * ```ts
 * const input = [
 * 	D.create("2024-06-03"),
 * 	"date1717286400000+",
 * 	D.create("2024-06-01"),
 * ] as const;
 * 
 * const asc = D.sort(input, "ASC");
 * // asc: TheDate[]
 * 
 * pipe(
 * 	input,
 * ```
 * 
 * @remarks
 * - `type` is `"ASC"` or `"DSC"`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/sort
 * 
 * @namespace D
 * 
 */
export declare function sort<GenericArray extends readonly (TheDate | SerializedTheDate)[]>(type: SortType): (array: GenericArray) => TheDate[];
export declare function sort<GenericArray extends readonly (TheDate | SerializedTheDate)[]>(array: GenericArray, type: SortType): TheDate[];
