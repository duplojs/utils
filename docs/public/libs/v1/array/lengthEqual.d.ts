import { type CreateTuple } from "./types";
/**
 * Checks if an array has a specific length.
 * 
 * **Supported call styles:**
 * - Classic: `lengthEqual(array, length)` → returns a boolean
 * - Curried: `lengthEqual(length)` → returns a function waiting for the array
 * - Classic predicate: `lengthEqual(array, length)` → narrows to a tuple
 * - Curried predicate: `lengthEqual(length)` → narrows to a tuple
 * 
 * The input array is not mutated.
 * 
 * ```ts
 * A.lengthEqual(
 * 	[1, 2, 3],
 * 	2,
 * ); // false
 * 
 * const numbersList = [1, 2];
 * 
 * if (A.lengthEqual(numbersList, 2)) {
 * 	// numbersList has length 2
 * }
 * 
 * pipe(
 * 	numbersList,
 * 	when(
 * 		A.lengthEqual(2),
 * 		(items) => {
 * 			// items has length 2
 * 		},
 * 	),
 * );
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the array to a tuple of the given length
 * 
 * @see [`A.length`](https://utils.duplojs.dev/en/v1/api/array/length) For getting length
 * @see https://utils.duplojs.dev/en/v1/api/array/lengthEqual
 * 
 * @namespace A
 * 
 */
export declare function lengthEqual<GenericArray extends readonly unknown[], GenericLength extends number>(length: GenericLength): (array: GenericArray) => array is CreateTuple<GenericArray[number], GenericLength>;
export declare function lengthEqual<GenericArray extends readonly unknown[], GenericLength extends number>(array: GenericArray, length: GenericLength): array is CreateTuple<GenericArray[number], GenericLength>;
