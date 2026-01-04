interface ArrayFindIndexParams {
    index: number;
}
/**
 * Finds the index of the first element matching a predicate.
 * 
 * **Supported call styles:**
 * - Classic: `findIndex(array, predicate)` → returns the index or `undefined`
 * - Curried: `findIndex(predicate)` → returns a function waiting for the array
 * 
 * The predicate receives `(element, { index })`.
 * 

 * ```ts
 * A.findIndex(
 * 	[1, 2, 3],
 * 	(value) => value > 1,
 * ); // 1
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.findIndex((value) => value === "beta"),
 * ); // 1
 * 
 * A.findIndex(
 * 	[1, 2],
 * 	(value) => value === 5,
 * ); // undefined
 * 
 * ```
 * 
 * @remarks
 * - Returns `undefined` when no element matches (unlike `Array.prototype.findIndex` which returns `-1`)
 * - Uses the same semantics as [`Array.prototype.findIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
 * 
 * @see [`A.find`](https://utils.duplojs.dev/en/v1/api/array/find) For retrieving the element
 * @see https://utils.duplojs.dev/en/v1/api/array/findIndex
 * 
 * @namespace A
 * 
 */
export declare function findIndex<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArrayFindIndexParams) => boolean): (array: GenericArray) => number | undefined;
export declare function findIndex<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindIndexParams) => boolean): number | undefined;
export {};
