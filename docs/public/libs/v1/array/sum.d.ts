/**
 * Sums all numbers in an array.
 * 
 * Signature: `sum(array)` → returns the total
 * 
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.sum([1, 2, 3]); // 6
 * 
 * A.sum([10, -5, 1]); // 6
 * 
 * A.sum([]); // 0
 * ```
 * 
 * @see [`A.minOf`](https://utils.duplojs.dev/en/v1/api/array/minOf) For the minimum value
 * @see [`A.maxOf`](https://utils.duplojs.dev/en/v1/api/array/maxOf) For the maximum value
 * @see https://utils.duplojs.dev/en/v1/api/array/sum
 * 
 * @namespace A
 * 
 */
export declare function sum<GenericArray extends readonly number[]>(array: GenericArray): number;
