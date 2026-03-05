import { type RemoveFromUnion } from "../common";
import { type MapTuple } from "./types";
type EligibleValue = string | null | undefined | boolean | number | bigint | symbol;
type TooLargeType = string | number | boolean | bigint | symbol;
/**
 * Checks that an array does not include a value.
 * 
 * **Supported call styles:**
 * - Classic: `notIncludes(array, value)` → returns a boolean
 * - Curried: `notIncludes(value)` → returns a function waiting for the array
 * - Classic predicate: `notIncludes(array, value)` → narrows element types
 * - Curried predicate: `notIncludes(value)` → narrows element types
 * 
 * Uses same-value-zero comparison.
 * The input array is not mutated.
 * 
 * ```ts
 * const mixedList = ["alpha", null];
 * 
 * if (A.notIncludes(mixedList, null)) {
 * 	// mixedList is string[]
 * }
 * 
 * pipe(
 * 	mixedList,
 * 	when(
 * 		A.notIncludes(null),
 * 		(items) => {
 * 			// items is string[]
 * 		},
 * 	),
 * );
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the element type
 * 
 * @see [`A.includes`](https://utils.duplojs.dev/en/v1/api/array/includes) For the opposite check
 * @see [`A.filter`](https://utils.duplojs.dev/en/v1/api/array/filter) For selecting elements
 * @see https://utils.duplojs.dev/en/v1/api/array/notIncludes
 * 
 * @namespace A
 * 
 */
export declare function notIncludes<GenericArray extends readonly unknown[], const GenericNotIncludeValue extends RemoveFromUnion<Extract<GenericArray[number], EligibleValue>, TooLargeType>>(value: GenericNotIncludeValue): (input: GenericArray) => input is MapTuple<GenericArray, Exclude<GenericArray[number], GenericNotIncludeValue>>;
export declare function notIncludes<GenericArray extends readonly unknown[]>(value: NoInfer<GenericArray[number]>): (input: GenericArray) => boolean;
export declare function notIncludes<GenericArray extends readonly unknown[], const GenericNotIncludeValue extends RemoveFromUnion<Extract<GenericArray[number], EligibleValue>, TooLargeType>>(input: GenericArray, value: GenericNotIncludeValue): input is MapTuple<GenericArray, Exclude<GenericArray[number], GenericNotIncludeValue>>;
export declare function notIncludes<GenericArray extends readonly unknown[]>(input: GenericArray, value: NoInfer<GenericArray[number]>): boolean;
export {};
