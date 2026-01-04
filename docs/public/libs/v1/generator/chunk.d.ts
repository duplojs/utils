/**
 * Splits an iterable into fixed-size chunks.
 * 
 * **Supported call styles:**
 * - Classic: `chunk(iterator, size)` → returns a generator of arrays
 * - Curried: `chunk(size)` → returns a function waiting for the iterator
 * 
 * The last chunk may be smaller than the size.
 * The input iterator is not mutated.
 * 
 * ```ts
 * const input = G.loop(
 * 	({ count, next, exit }: G.GeneratorLoopParams<number>) => N.greater(count, 7)
 * 		? exit()
 * 		: next(count),
 * );
 * 
 * const result = G.chunk(input, 3);
 * // Generator<number[], unknown, unknown>
 * ```
 * 
 * @see [`G.asyncChunk`](https://utils.duplojs.dev/en/v1/api/generator/asyncChunk) For async iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/chunk
 * 
 * @namespace G
 * 
 */
export declare function chunk<const GenericElement extends unknown>(size: number): (input: Iterable<GenericElement>) => Generator<GenericElement[], unknown, unknown>;
export declare function chunk<const GenericElement extends unknown>(input: Iterable<GenericElement>, size: number): Generator<GenericElement[], unknown, unknown>;
