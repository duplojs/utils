/**
 * Replaces a segment using splice semantics.
 * 
 * **Supported call styles:**
 * - Classic: `spliceReplace(array, indexFrom, elements)` → returns a new array
 * - Curried: `spliceReplace(indexFrom, elements)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 

 * ```ts
 * A.spliceReplace(
 * 	[1, 2, 3],
 * 	1,
 * 	[9, 8],
 * ); // [1, 9, 8]
 * 
 * pipe(
 * 	["alpha", "beta", "gamma"],
 * 	A.spliceReplace(1, ["delta"]),
 * ); // ["alpha", "delta", "gamma"]
 * 
 * A.spliceReplace(
 * 	[1, 2],
 * 	0,
 * 	[3],
 * ); // [3, 2]
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.prototype.splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
 * 
 * @see [`A.spliceDelete`](https://utils.duplojs.dev/en/v1/api/array/spliceDelete) For deleting values
 * @see [`A.spliceInsert`](https://utils.duplojs.dev/en/v1/api/array/spliceInsert) For inserting values
 * @see https://utils.duplojs.dev/en/v1/api/array/spliceReplace
 * 
 * @namespace A
 * 
 */
export declare function spliceReplace<GenericElement extends unknown>(indexFrom: number, elements: GenericElement[]): (array: readonly GenericElement[]) => GenericElement[];
export declare function spliceReplace<GenericElement extends unknown>(array: readonly GenericElement[], indexFrom: number, elements: GenericElement[]): GenericElement[];
