interface ArrayFindLastParams {
    index: number;
}
/**
 * Finds the last element matching a predicate.
 * 
 * **Supported call styles:**
 * - Classic: `findLast(array, predicate)` → returns the element or `undefined`
 * - Curried: `findLast(predicate)` → returns a function waiting for the array
 * - Classic predicate: `findLast(array, isType)` → narrows the return type
 * - Curried predicate: `findLast(isType)` → narrows the return type
 * 
 * The predicate receives `(element, { index })`.
 * 
 * ```ts
 * A.findLast(
 * 	[1, 2, 3],
 * 	(value) => value > 1,
 * ); // 3
 * 
 * A.findLast(
 * 	<const>[1, "alpha", null],
 * 	isType("string"),
 * ); // "alpha"
 * 
 * pipe(
 * 	[1, "alpha", null],
 * 	A.findLast(isType("string")),
 * ); // "alpha"
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type but can still return `undefined`
 * - Uses the same semantics as [`Array.prototype.findLast`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
 * 
 * @see [`A.find`](https://utils.duplojs.dev/en/v1/api/array/find) For finding from the start
 * @see https://utils.duplojs.dev/en/v1/api/array/findLast
 * 
 * @namespace A
 * 
 */
export declare function findLast<GenericArray extends readonly unknown[], GenericOutput extends GenericArray[number]>(predicate: (element: GenericArray[number], params: ArrayFindLastParams) => element is GenericOutput): (input: GenericArray) => GenericOutput | undefined;
export declare function findLast<GenericElement extends unknown, GenericOutput extends GenericElement>(input: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindLastParams) => element is GenericOutput): GenericOutput | undefined;
export declare function findLast<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArrayFindLastParams) => boolean): (input: GenericArray) => GenericArray[number] | undefined;
export declare function findLast<GenericElement extends unknown>(input: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindLastParams) => boolean): GenericElement | undefined;
export {};
