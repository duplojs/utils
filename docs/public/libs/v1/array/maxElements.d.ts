/**
 * Checks whether an array has at most a given length.
 * 
 * **Supported call styles:**
 * - Classic: `maxElements(array, maxLength)` → returns a boolean
 * - Curried: `maxElements(maxLength)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 

 * ```ts
 * A.maxElements(
 * 	[1, 2, 3],
 * 	2,
 * ); // false
 * 
 * A.maxElements(
 * 	[1, 2],
 * 	2,
 * ); // true
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.maxElements(3),
 * ); // true
 * 
 * ```
 * 
 * @see [`A.minElements`](https://utils.duplojs.dev/en/v1/api/array/minElements) For minimum length checks
 * @see https://utils.duplojs.dev/en/v1/api/array/maxElements
 * 
 * @namespace A
 * 
 */
export declare function maxElements<GenericArray extends readonly unknown[]>(maxLength: number): (array: GenericArray) => boolean;
export declare function maxElements<GenericArray extends readonly unknown[]>(array: GenericArray, maxLength: number): boolean;
