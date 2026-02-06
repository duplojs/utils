import type { SortType } from "../common/types/sortType";
import { TheTime } from "./theTime";
import type { SerializedTheTime } from "./types/serializedTheTime";
/**
 * Sorts duration values and returns normalized `TheTime[]`.
 * 
 * **Supported call styles:**
 * - Classic: `sortTimes(array, type)` → `TheTime[]`
 * - Curried: `sortTimes(type)` → `(array) => TheTime[]`
 * 
 * ```ts
 * const input = [
 * 	D.createTime(3_000, "millisecond"),
 * 	"time1000+",
 * 	D.createTime(2_000, "millisecond"),
 * ] as const;
 * 
 * const asc = D.sortTimes(input, "ASC");
 * // asc: TheTime[]
 * 
 * pipe(
 * 	input,
 * ```
 * 
 * @remarks
 * - `type` is `"ASC"` or `"DSC"`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/sortTimes
 * 
 * @namespace D
 * 
 */
export declare function sortTimes<GenericArray extends readonly (TheTime | SerializedTheTime)[]>(type: SortType): (array: GenericArray) => TheTime[];
export declare function sortTimes<GenericArray extends readonly (TheTime | SerializedTheTime)[]>(array: GenericArray, type: SortType): TheTime[];
