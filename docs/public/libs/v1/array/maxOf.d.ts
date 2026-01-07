/**
 * Gets the maximum value from a number array.
 * 
 * Signature: `maxOf(array)` → returns a number or `undefined`
 * 
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.maxOf(
 * 	[1, 5, 2],
 * ); // 5
 * 
 * A.maxOf(
 * 	[-1, -3],
 * ); // -1
 * 
 * A.maxOf(
 * 	[],
 * ); // undefined
 * 
 * ```
 * 
 * @see [`A.minOf`](https://utils.duplojs.dev/en/v1/api/array/minOf) For the minimum value
 * @see https://utils.duplojs.dev/en/v1/api/array/maxOf
 * 
 * @namespace A
 * 
 */
export declare function maxOf<GenericArray extends readonly number[]>(values: GenericArray): number | undefined;
