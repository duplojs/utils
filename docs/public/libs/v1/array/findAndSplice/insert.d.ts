interface ArrayFindAndSpliceInsertIndexParams {
    index: number;
}
/**
 * Finds the first element matching a predicate and inserts elements.
 * 
 * **Supported call styles:**
 * - Classic: `findAndSpliceInsert(array, predicate, elements)` → returns a new array or `undefined`
 * - Curried: `findAndSpliceInsert(predicate, elements)` → returns a function waiting for the array
 * 
 * The predicate receives `(element, { index })`.
 * The input array is not mutated.
 * 
 * ```ts
 * A.findAndSpliceInsert(
 * 	[1, 2, 3],
 * 	(value) => value === 2,
 * 	[9],
 * ); // [1, 9, 2, 3]
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.findAndSpliceInsert((value) => value === "alpha", ["start"]),
 * ); // ["start", "alpha", "beta"]
 * 
 * A.findAndSpliceInsert(
 * 	[1, 2],
 * 	(value) => value === 5,
 * 	[0],
 * ); // undefined
 * 
 * ```
 * 
 * @remarks
 * - Returns `undefined` when no element matches
 * 
 * @see [`A.findAndSpliceDelete`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceDelete) For deleting elements
 * @see [`A.findAndSpliceReplace`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceReplace) For replacing elements
 * @see https://utils.duplojs.dev/en/v1/api/array/findAndSpliceInsert
 * 
 * @namespace A
 * 
 */
export declare function findAndSpliceInsert<GenericElement extends unknown>(predicate: (element: GenericElement, params: ArrayFindAndSpliceInsertIndexParams) => boolean, elements: GenericElement[]): (array: readonly GenericElement[]) => GenericElement[] | undefined;
export declare function findAndSpliceInsert<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindAndSpliceInsertIndexParams) => boolean, elements: GenericElement[]): GenericElement[] | undefined;
export {};
