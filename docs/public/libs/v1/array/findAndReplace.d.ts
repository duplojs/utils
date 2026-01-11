import { type AnyValue } from "../common";
interface ArrayFindAndSetIndexParams {
    index: number;
}
/**
 * Finds the first element matching a predicate and replaces it.
 * 
 * **Supported call styles:**
 * - Classic: `findAndReplace(array, predicate, value)` → returns a new array or `undefined`
 * - Curried: `findAndReplace(predicate, value)` → returns a function waiting for the array
 * 
 * The predicate receives `(element, { index })`.
 * The input array is not mutated.
 * 
 * ```ts
 * A.findAndReplace(
 * 	[1, 2, 3],
 * 	(value) => value === 2,
 * 	9,
 * ); // [1, 9, 3]
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.findAndReplace((value) => value === "beta", "gamma"),
 * ); // ["alpha", "gamma"]
 * 
 * A.findAndReplace(
 * 	[1, 2],
 * 	(value) => value === 5,
 * 	0,
 * ); // undefined
 * 
 * ```
 * 
 * @remarks
 * - Returns `undefined` when no element matches
 * 
 * @see [`A.find`](https://utils.duplojs.dev/en/v1/api/array/find) For finding an element
 * @see [`A.findAndSpliceReplace`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceReplace) For replacing via splice
 * @see https://utils.duplojs.dev/en/v1/api/array/findAndReplace
 * 
 * @namespace A
 * 
 */
export declare function findAndReplace<GenericArray extends readonly unknown[], GenericValue extends AnyValue>(predicate: (element: GenericArray[number], params: ArrayFindAndSetIndexParams) => boolean, value: GenericValue): (input: GenericArray) => (GenericArray[number] | GenericValue)[] | undefined;
export declare function findAndReplace<GenericArray extends readonly unknown[], GenericValue extends AnyValue>(input: GenericArray, predicate: (element: GenericArray[number], params: ArrayFindAndSetIndexParams) => boolean, value: GenericValue): (GenericArray[number] | GenericValue)[] | undefined;
export {};
