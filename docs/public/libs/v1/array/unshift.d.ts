/**
 * Adds elements to the start of an array.
 * 
 * **Supported call styles:**
 * - Classic: `unshift(array, element, ...elements)` → returns a new array
 * - Curried: `unshift(element)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 

 * ```ts
 * A.unshift(
 * 	[2, 3],
 * 	1,
 * ); // [1, 2, 3]
 * 
 * A.unshift(
 * 	[3, 4],
 * 	1,
 * 	2,
 * ); // [1, 2, 3, 4]
 * 
 * pipe(
 * 	["beta", "gamma"],
 * 	A.unshift("alpha"),
 * ); // ["alpha", "beta", "gamma"]
 * 
 * ```
 * 
 * @remarks
 * - Classic style supports multiple elements via rest parameters
 * - Curried style adds only a single element
 * 
 * @see [`A.push`](https://utils.duplojs.dev/en/v1/api/array/push) For adding at the end
 * @see https://utils.duplojs.dev/en/v1/api/array/unshift
 * 
 * @namespace A
 * 
 */
export declare function unshift<GenericElement extends unknown>(element: NoInfer<GenericElement>): (array: readonly GenericElement[]) => GenericElement[];
export declare function unshift<GenericElement extends unknown>(array: readonly GenericElement[], element: NoInfer<GenericElement>, ...elements: NoInfer<GenericElement>[]): GenericElement[];
