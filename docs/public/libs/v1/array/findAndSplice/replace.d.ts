interface ArrayFindAndSpliceReplaceIndexParams {
    index: number;
}
/**
 * Finds the first element matching a predicate and replaces a segment.
 * 
 * **Supported call styles:**
 * - Classic: `findAndSpliceReplace(array, predicate, elements)` → returns a new array or `undefined`
 * - Curried: `findAndSpliceReplace(predicate, elements)` → returns a function waiting for the array
 * 
 * The predicate receives `(element, { index })`.
 * The input array is not mutated.
 * 
 * ```ts
 * A.findAndSpliceReplace(
 * 	[1, 2, 3, 4],
 * 	(value) => value === 2,
 * 	[9, 8],
 * ); // [1, 9, 8, 4]
 * 
 * pipe(
 * 	["alpha", "beta", "gamma"],
 * 	A.findAndSpliceReplace((value) => value === "beta", ["delta"]),
 * ); // ["alpha", "delta", "gamma"]
 * 
 * A.findAndSpliceReplace(
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
 * @see [`A.findAndSpliceInsert`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceInsert) For inserting elements
 * @see https://utils.duplojs.dev/en/v1/api/array/findAndSpliceReplace
 * 
 * @namespace A
 * 
 */
export declare function findAndSpliceReplace<GenericElement extends unknown>(predicate: (element: GenericElement, params: ArrayFindAndSpliceReplaceIndexParams) => boolean, elements: GenericElement[]): (array: readonly GenericElement[]) => GenericElement[] | undefined;
export declare function findAndSpliceReplace<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindAndSpliceReplaceIndexParams) => boolean, elements: GenericElement[]): GenericElement[] | undefined;
export {};
