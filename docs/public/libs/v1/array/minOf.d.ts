/**
 * Gets the minimum value from a number array.
 * 
 * Signature: `minOf(array)` → returns a number or `undefined`
 * 
 * The input array is not mutated.
 * 
 * ```ts
 * A.minOf(
 * 	[1, 5, 2],
 * ); // 1
 * 
 * A.minOf(
 * 	[-1, -3],
 * ); // -3
 * 
 * A.minOf(
 * 	[],
 * ); // undefined
 * 
 * ```
 * 
 * @see [`A.maxOf`](https://utils.duplojs.dev/en/v1/api/array/maxOf) For the maximum value
 * @see https://utils.duplojs.dev/en/v1/api/array/minOf
 * 
 * @namespace A
 * 
 */
export declare function minOf<GenericArray extends readonly number[]>(values: GenericArray): number | undefined;
