import { type RemoveFromUnion } from "../common";
export type NotIncludeValue = string | null | undefined | boolean | number | bigint | symbol;
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
export declare function notIncludes<GenericArrayValue extends unknown, const GenericNotIncludeValue extends RemoveFromUnion<Extract<GenericArrayValue, NotIncludeValue>, Exclude<NotIncludeValue, null | undefined>>>(value: GenericNotIncludeValue): (input: readonly GenericArrayValue[]) => input is Exclude<GenericArrayValue, GenericNotIncludeValue>[];
export declare function notIncludes<GenericArrayValue extends unknown, const GenericNotIncludeValue extends RemoveFromUnion<Extract<GenericArrayValue, NotIncludeValue>, Exclude<NotIncludeValue, null | undefined>>>(input: readonly GenericArrayValue[], value: GenericNotIncludeValue): input is Exclude<GenericArrayValue, GenericNotIncludeValue>[];
