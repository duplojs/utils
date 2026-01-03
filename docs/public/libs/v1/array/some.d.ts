interface ArraySomeParams<GenericInputArray extends readonly unknown[]> {
    index: number;
    self: GenericInputArray;
}
/**
 * Checks whether at least one element satisfies a predicate.
 * 
 * **Supported call styles:**
 * - Classic: `some(array, predicate)` → returns a boolean
 * - Curried: `some(predicate)` → returns a function waiting for the array
 * 
 * The predicate receives `(element, { index, self })`, where `index` is the element position
 * and `self` is the original array.
 * The input array is not mutated.
 * 

 * ```ts
 * A.some(
 * 	[1, 2, 3],
 * 	(value) => value > 2,
 * ); // true
 * 
 * A.some(
 * 	["alpha", "beta"],
 * 	(value) => value === "gamma",
 * ); // false
 * 
 * pipe(
 * 	[1, 2, 3],
 * 	when(
 * 		A.some((value) => value > 2),
 * 		(items) => {
 * 			// items has at least one match
 * 		},
 * 	),
 * );
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.prototype.some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
 * 
 * @see [`A.every`](https://utils.duplojs.dev/en/v1/api/array/every) For checking all elements
 * @see [`A.filter`](https://utils.duplojs.dev/en/v1/api/array/filter) For selecting matches
 * @see https://utils.duplojs.dev/en/v1/api/array/some
 * 
 * @namespace A
 * 
 */
export declare function some<GenericInput extends readonly unknown[]>(predicate: (element: GenericInput[number], params: ArraySomeParams<GenericInput>) => boolean): (input: GenericInput) => boolean;
export declare function some<GenericInput extends readonly unknown[]>(input: GenericInput, predicate: (element: GenericInput[number], params: ArraySomeParams<GenericInput>) => boolean): boolean;
export {};
