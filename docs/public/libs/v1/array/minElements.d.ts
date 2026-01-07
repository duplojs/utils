import { type CreateTuple } from "./types/createTuple";
/**
 * Checks if an array has at least a given length.
 * 
 * **Supported call styles:**
 * - Classic: `minElements(array, minLength)` → returns a boolean
 * - Curried: `minElements(minLength)` → returns a function waiting for the array
 * - Classic predicate: `minElements(array, minLength)` → narrows to a tuple prefix
 * - Curried predicate: `minElements(minLength)` → narrows to a tuple prefix
 * 
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.minElements(
 * 	[1],
 * 	2,
 * ); // false
 * 
 * const valuesList = [
 * 	1,
 * 	2,
 * ];
 * 
 * if (A.minElements(valuesList, 2)) {
 * 	// valuesList has at least 2 items
 * }
 * 
 * pipe(
 * 	valuesList,
 * 	when(
 * 		A.minElements(2),
 * 		(items) => {
 * 			// items has at least 2 items
 * 		},
 * 	),
 * );
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the array length but can still be `false`
 * 
 * @see [`A.maxElements`](https://utils.duplojs.dev/en/v1/api/array/maxElements) For maximum length checks
 * @see https://utils.duplojs.dev/en/v1/api/array/minElements
 * 
 * @namespace A
 * 
 */
export declare function minElements<GenericArray extends readonly unknown[], GenericLength extends number>(minLength: GenericLength): (array: GenericArray) => array is [
    ...CreateTuple<GenericArray[number], GenericLength>,
    ...GenericArray[number][]
];
export declare function minElements<GenericArray extends readonly unknown[], GenericLength extends number>(array: GenericArray, minLength: GenericLength): array is [
    ...CreateTuple<GenericArray[number], GenericLength>,
    ...GenericArray[number][]
];
