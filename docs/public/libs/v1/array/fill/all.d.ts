/**
 * Fills all elements of an array with a given value.
 * 
 * **Supported call styles:**
 * - Classic: `fillAll(array, value)` → returns a new array
 * - Curried: `fillAll(value)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 

 * ```ts
 * A.fillAll(
 * 	[1, 2, 3],
 * 	0,
 * ); // [0, 0, 0]
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.fillAll("gamma"),
 * ); // ["gamma", "gamma"]
 * 
 * A.fillAll(
 * 	[],
 * 	true,
 * ); // []
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.prototype.fill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
 * 
 * @see [`A.fill`](https://utils.duplojs.dev/en/v1/api/array/fill) For filling a range
 * @see https://utils.duplojs.dev/en/v1/api/array/fillAll
 * 
 * @namespace A
 * 
 */
export declare function fillAll<GenericElement extends unknown>(element: GenericElement): (input: readonly unknown[]) => GenericElement[];
export declare function fillAll<GenericElement extends unknown>(input: readonly unknown[], element: GenericElement): GenericElement[];
