/**
 * Finds the first index of a value.
 * 
 * **Supported call styles:**
 * - Classic: `indexOf(array, value, fromIndex?)` → returns the index or `undefined`
 * - Curried: `indexOf(value)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 

 * ```ts
 * A.indexOf(
 * 	[1, 2, 3],
 * 	2,
 * ); // 1
 * 
 * A.indexOf(
 * 	[1, 2, 3],
 * 	2,
 * 	2,
 * ); // undefined
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.indexOf("beta"),
 * ); // 1
 * 
 * ```
 * 
 * @remarks
 * - Returns `undefined` when not found (unlike `Array.prototype.indexOf` which returns `-1`)
 * - Curried style does not accept `fromIndex`
 * 
 * @see [`A.lastIndexOf`](https://utils.duplojs.dev/en/v1/api/array/lastIndexOf) For searching from the end
 * @see https://utils.duplojs.dev/en/v1/api/array/indexOf
 * 
 * @namespace A
 * 
 */
export declare function indexOf<GenericElement extends unknown>(element: GenericElement): (array: readonly GenericElement[]) => number | undefined;
export declare function indexOf<GenericElement extends unknown>(array: readonly GenericElement[], element: GenericElement, fromIndex?: number): number | undefined;
