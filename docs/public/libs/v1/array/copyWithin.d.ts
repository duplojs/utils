/**
 * Copies a sequence within an array to another position.
 * 
 * **Supported call styles:**
 * - Classic: `copyWithin(array, target, start, end?)` → returns a new array
 * - Curried: `copyWithin(target, start, end?)` → returns a function waiting for the array
 * 
 * The copy uses the range `[start, end)` and writes from `target`.
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.copyWithin([1, 2, 3, 4], 0, 2); // [3, 4, 3, 4]
 * 
 * A.copyWithin([1, 2, 3, 4], 1, 0, 2); // [1, 1, 2, 4]
 * 
 * pipe(
 * 	["alpha", "beta", "gamma"],
 * 	A.copyWithin(1, 0, 2),
 * ); // ["alpha", "alpha", "beta"]
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.prototype.copyWithin`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
 * 
 * @see [`A.slice`](https://utils.duplojs.dev/en/v1/api/array/slice) For extracting ranges
 * @see [`A.spliceReplace`](https://utils.duplojs.dev/en/v1/api/array/spliceReplace) For replacing a segment
 * @see https://utils.duplojs.dev/en/v1/api/array/copyWithin
 * 
 * @namespace A
 * 
 */
export declare function copyWithin<GenericElement extends unknown>(target: number, start: number, end?: number): (array: readonly GenericElement[]) => GenericElement[];
export declare function copyWithin<GenericElement extends unknown>(array: readonly GenericElement[], target: number, start: number, end?: number): GenericElement[];
