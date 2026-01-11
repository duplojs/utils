interface ArrayFindParams {
    index: number;
}
/**
 * Finds the first element matching a predicate.
 * 
 * **Supported call styles:**
 * - Classic: `find(array, predicate)` → returns the element or `undefined`
 * - Curried: `find(predicate)` → returns a function waiting for the array
 * - Classic predicate: `find(array, isType)` → narrows the return type
 * - Curried predicate: `find(isType)` → narrows the return type
 * 
 * The predicate receives `(element, { index })`.
 * The input array is not mutated.
 * 
 * ```ts
 * A.find(
 * 	[1, 2, 3],
 * 	(value) => value > 2,
 * ); // 3
 * 
 * pipe(
 * 	<const>[1, "alpha", null],
 * 	A.find(isType("string")),
 * ); // "alpha"
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type but can still return `undefined`
 * - Uses the same semantics as [`Array.prototype.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/find
 * 
 * @namespace A
 * 
 */
export declare function find<GenericArray extends readonly unknown[], GenericOutput extends GenericArray[number]>(predicate: (element: GenericArray[number], params: ArrayFindParams) => element is GenericOutput): (array: GenericArray) => GenericOutput | undefined;
export declare function find<GenericElement extends unknown, GenericOutput extends GenericElement>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindParams) => element is GenericOutput): GenericOutput | undefined;
export declare function find<GenericArray extends readonly unknown[]>(predicate: (element: GenericArray[number], params: ArrayFindParams) => boolean): (array: GenericArray) => GenericArray[number] | undefined;
export declare function find<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindParams) => boolean): GenericElement | undefined;
export {};
