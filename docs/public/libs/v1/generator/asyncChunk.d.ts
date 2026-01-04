/**
 * Splits an async iterable into fixed-size chunks.
 * 
 * **Supported call styles:**
 * - Classic: `asyncChunk(iterator, size)` → returns an async generator of arrays
 * - Curried: `asyncChunk(size)` → returns a function waiting for the iterator
 * 
 * The last chunk may be smaller than the size.
 * The input iterator is not mutated.
 * 
 * @example
 * ```ts
 * const input = [1, 2, 3, 4];
 * 
 * const iterator = G.asyncMap(
 * 	input,
 * 	async(value) => Promise.resolve(value * 2),
 * );
 * 
 * const result = await pipe(
 * 	G.asyncChunk(
 * 		iterator,
 * 		2,
 * 	),
 * 	A.from,
 * );
 * // number[][]
 * ```
 * 
 * @see [`G.chunk`](https://utils.duplojs.dev/en/v1/api/generator/chunk) For sync iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/asyncChunk
 * 
 * @namespace G
 * 
 */
export declare function asyncChunk<const GenericElement extends unknown>(size: number): (input: AsyncIterable<GenericElement>) => AsyncGenerator<GenericElement[], unknown, unknown>;
export declare function asyncChunk<const GenericElement extends unknown>(input: AsyncIterable<GenericElement>, size: number): AsyncGenerator<GenericElement[], unknown, unknown>;
