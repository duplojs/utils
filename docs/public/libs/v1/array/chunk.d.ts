/**
 * Splits an array into chunks of a given size.
 * 
 * **Supported call styles:**
 * - Classic: `chunk(array, size)` → returns a new array of chunks
 * - Curried: `chunk(size)` → returns a function waiting for the array
 * 
 * Each chunk contains up to `size` items, and the last chunk may be smaller.
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.chunk([1, 2, 3, 4, 5], 2);
 * // [[1, 2], [3, 4], [5]]
 * 
 * pipe(
 * 	["alpha", "beta", "gamma", "delta", "epsilon"],
 * 	A.chunk(3),
 * ); // [["alpha", "beta", "gamma"], ["delta", "epsilon"]]
 * ```
 * 
 * @remarks
 * - `size` should be a positive integer to avoid unexpected behavior
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/chunk
 * 
 * @namespace A
 */
export declare function chunk<GenericInput extends readonly unknown[]>(size: number): (input: GenericInput) => GenericInput[];
export declare function chunk<GenericInput extends readonly unknown[]>(input: GenericInput, size: number): GenericInput[];
