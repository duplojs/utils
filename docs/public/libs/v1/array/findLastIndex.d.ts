interface ArrayFindLastIndexParams {
    index: number;
}
/**
 * Finds the index of the last element matching a predicate.
 * 
 * **Supported call styles:**
 * - Classic: `findLastIndex(array, predicate)` → returns the index or `undefined`
 * - Curried: `findLastIndex(predicate)` → returns a function waiting for the array
 * 
 * The predicate receives `(element, { index })`.
 * 

 * ```ts
 * A.findLastIndex(
 * 	[1, 2, 3, 2],
 * 	(value) => value === 2,
 * ); // 3
 * 
 * pipe(
 * 	["alpha", "beta", "beta"],
 * 	A.findLastIndex((value) => value === "beta"),
 * ); // 2
 * 
 * A.findLastIndex(
 * 	[1, 2],
 * 	(value) => value === 5,
 * ); // undefined
 * 
 * ```
 * 
 * @remarks
 * - Returns `undefined` when no element matches (unlike `Array.prototype.findLastIndex` which returns `-1`)
 * - Uses the same semantics as [`Array.prototype.findLastIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
 * 
 * @see [`A.findLast`](https://utils.duplojs.dev/en/v1/api/array/findLast) For retrieving the element
 * @see https://utils.duplojs.dev/en/v1/api/array/findLastIndex
 * 
 * @namespace A
 * 
 */
export declare function findLastIndex<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArrayFindLastIndexParams) => boolean): (array: GenericArray) => number | undefined;
export declare function findLastIndex<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindLastIndexParams) => boolean): number | undefined;
export {};
