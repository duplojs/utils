/**
 * Adds elements to the end of an array.
 * 
 * **Supported call styles:**
 * - Classic: `push(array, item, ...items)` → returns a new array
 * - Curried: `push(item)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.push(
 * 	[1, 2],
 * 	3,
 * ); // [1, 2, 3]
 * 
 * A.push(
 * 	[1, 2],
 * 	3,
 * 	4,
 * ); // [1, 2, 3, 4]
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.push("gamma"),
 * ); // ["alpha", "beta", "gamma"]
 * 
 * ```
 * 
 * @remarks
 * - Classic style supports multiple items via rest parameters
 * - Curried style adds only a single item
 * 
 * @see [`A.unshift`](https://utils.duplojs.dev/en/v1/api/array/unshift) For adding at the start
 * @see https://utils.duplojs.dev/en/v1/api/array/push
 * 
 * @namespace A
 * 
 */
export declare function push<GenericElement extends unknown>(item: NoInfer<GenericElement>): (input: readonly GenericElement[]) => GenericElement[];
export declare function push<GenericElement extends unknown>(input: readonly GenericElement[], item: NoInfer<GenericElement>, ...items: NoInfer<GenericElement>[]): GenericElement[];
