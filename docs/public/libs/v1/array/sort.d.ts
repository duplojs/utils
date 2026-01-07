/**
 * Sorts an array using a compare function.
 * 
 * **Supported call styles:**
 * - Classic: `sort(array, compareFn)` → returns a new array
 * - Curried: `sort(compareFn)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.sort(
 * 	[3, 1, 2],
 * 	(first, second) => first - second,
 * ); // [1, 2, 3]
 * 
 * pipe(
 * 	["beta", "alpha"],
 * 	A.sort((first, second) => first.localeCompare(second)),
 * ); // ["alpha", "beta"]
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/sort
 * 
 * @namespace A
 * 
 */
export declare function sort<GenericElement extends unknown>(compareFn: (first: GenericElement, second: GenericElement) => number): (array: readonly GenericElement[]) => GenericElement[];
export declare function sort<GenericElement extends unknown>(array: readonly GenericElement[], compareFn: (first: GenericElement, second: GenericElement) => number): GenericElement[];
