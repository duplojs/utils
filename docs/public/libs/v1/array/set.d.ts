/**
 * Sets an element at a given index.
 * 
 * **Supported call styles:**
 * - Classic: `set(array, index, value)` → returns a new array
 * - Curried: `set(index, value)` → returns a function waiting for the array
 * 
 * Negative indices are supported.
 * The input array is not mutated.
 * 
 * ```ts
 * A.set(
 * 	[1, 2, 3],
 * 	1,
 * 	9,
 * ); // [1, 9, 3]
 * 
 * A.set(
 * 	[1, 2, 3],
 * 	-1,
 * 	0,
 * ); // [1, 2, 0]
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.set(0, "gamma"),
 * ); // ["gamma", "beta"]
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.prototype.with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with) for index normalization
 * 
 * @see [`A.at`](https://utils.duplojs.dev/en/v1/api/array/at) For reading an index
 * @see https://utils.duplojs.dev/en/v1/api/array/set
 * 
 * @namespace A
 * 
 */
export declare function set<GenericValue extends unknown>(index: number, value: GenericValue): (array: readonly GenericValue[]) => GenericValue[];
export declare function set<GenericValue extends unknown>(array: readonly GenericValue[], index: number, value: GenericValue): GenericValue[];
