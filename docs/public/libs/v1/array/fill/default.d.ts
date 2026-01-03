/**
 * Fills part of an array with a given value.
 * 
 * **Supported call styles:**
 * - Classic: `fill(array, value, start, end)` → returns a new array
 * - Curried: `fill(value, start, end)` → returns a function waiting for the array
 * 
 * The fill operation applies from `start` (inclusive) to `end` (exclusive).
 * The input array is not mutated.
 * 

 * ```ts
 * A.fill(
 * 	[10, 20, 30, 40],
 * 	0,
 * 	1,
 * 	3,
 * ); // [10, 0, 0, 40]
 * 
 * pipe(
 * 	[
 * 		"alpha",
 * 		"beta",
 * 		"gamma",
 * 	],
 * 	A.fill("delta", 0, 2),
 * ); // ["delta", "delta", "gamma"]
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.prototype.fill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) for `start` and `end`
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/fill
 * 
 * @namespace A
 * 
 */
export declare function fill<GenericElement extends unknown>(value: GenericElement, start: number, end: number): (array: readonly GenericElement[]) => GenericElement[];
export declare function fill<GenericElement extends unknown>(array: readonly GenericElement[], value: GenericElement, start: number, end: number): GenericElement[];
