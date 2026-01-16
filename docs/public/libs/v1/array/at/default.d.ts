import type { IsEqual } from "../../common";
import type { AtTuple } from "../types";
export type AtArray<GenericArray extends readonly unknown[], GenericIndex extends number> = IsEqual<GenericArray["length"], number> extends true ? GenericArray[number] | undefined : AtTuple<GenericArray, GenericIndex>;
/**
 * Accesses an element at a given index, supporting negative indices.
 * 
 * **Supported call styles:**
 * - Classic: `at(array, index)` → returns the element
 * - Curried: `at(index)` → returns a function waiting for the array
 * 
 * **Negative indices:** `-1` is the last element, `-2` is second-to-last, etc.
 * Returns `undefined` if out of bounds.
 * 
 * ```ts
 * pipe(
 * 	[10, 20, 30, 40],
 * 	A.at(2),
 * ); // 30
 * 
 * A.at(<const>[10, 20, 30, 40], 2); // 30
 * A.at(<const>[10, 20, 30, 40], -1); // 40
 * A.at(<const>[10, 20, 30], 10); // undefined
 * ```
 * 
 * @remarks
 * - Type-safe with tuple types: return type is inferred based on the index
 * - Does not mutate the input array
 * - Works seamlessly in functional composition and pipes
 * 
 * @see [`A.first`](https://utils.duplojs.dev/en/v1/api/array/first) For accessing the first element
 * @see [`A.last`](https://utils.duplojs.dev/en/v1/api/array/last) For accessing the last element
 * @see https://utils.duplojs.dev/en/v1/api/array/at
 * 
 * @namespace A
 */
export declare function at<GenericArray extends readonly unknown[], GenericIndex extends number>(index: GenericIndex): (array: GenericArray) => AtArray<GenericArray, GenericIndex>;
export declare function at<GenericArray extends readonly unknown[], GenericIndex extends number>(array: GenericArray, index: GenericIndex): AtArray<GenericArray, GenericIndex>;
