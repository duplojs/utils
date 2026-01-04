interface ArrayFindAndSpliceDeleteIndexParams {
    index: number;
}
/**
 * Finds the first element matching a predicate and deletes a segment.
 * 
 * **Supported call styles:**
 * - Classic: `findAndSpliceDelete(array, predicate, deleteCount)` → returns a new array or `undefined`
 * - Curried: `findAndSpliceDelete(predicate, deleteCount)` → returns a function waiting for the array
 * 
 * The predicate receives `(element, { index })`.
 * The input array is not mutated.
 * 

 * ```ts
 * A.findAndSpliceDelete(
 * 	[1, 2, 3, 4],
 * 	(value) => value === 2,
 * 	2,
 * ); // [1, 4]
 * 
 * pipe(
 * 	["alpha", "beta", "gamma"],
 * 	A.findAndSpliceDelete((value) => value === "beta", 1),
 * ); // ["alpha", "gamma"]
 * 
 * A.findAndSpliceDelete(
 * 	[1, 2],
 * 	(value) => value === 5,
 * 	1,
 * ); // undefined
 * 
 * ```
 * 
 * @remarks
 * - Returns `undefined` when no element matches
 * 
 * @see [`A.findAndSpliceInsert`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceInsert) For inserting elements
 * @see [`A.findAndSpliceReplace`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceReplace) For replacing elements
 * @see https://utils.duplojs.dev/en/v1/api/array/findAndSpliceDelete
 * 
 * @namespace A
 * 
 */
export declare function findAndSpliceDelete<GenericElement extends unknown>(predicate: (element: GenericElement, params: ArrayFindAndSpliceDeleteIndexParams) => boolean, deleteCount: number): (array: readonly GenericElement[]) => GenericElement[] | undefined;
export declare function findAndSpliceDelete<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindAndSpliceDeleteIndexParams) => boolean, deleteCount: number): GenericElement[] | undefined;
export {};
