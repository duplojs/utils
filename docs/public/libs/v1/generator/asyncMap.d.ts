interface AsyncGeneratorMapParams {
    index: number;
}
/**
 * Maps values from an iterable to an async generator.
 * 
 * **Supported call styles:**
 * - Classic: `asyncMap(iterator, theFunction)` → returns an async generator
 * - Curried: `asyncMap(theFunction)` → returns a function waiting for the iterator
 * 
 * The function receives `(item, { index })`.
 * The input iterator is not mutated.
 * 
 * ```ts
 * const ids = [1, 2, 3];
 * 
 * const result = await pipe(
 * 	ids,
 * 	G.asyncMap(async(itemId) => {
 * 		const response = await fetch(`https://api.example.com/items/${itemId}`);
 * 		const { price } = await response.json() as { price: number };
 * 		return price;
 * 	}),
 * 	G.asyncReduce(
 * 		G.reduceFrom<number[]>([]),
 * 		({ element, lastValue, next }) => next([
 * 			...lastValue,
 * 			element,
 * 		]),
 * 	),
 * );
 * 
 * ```
 * 
 * @see [`G.map`](https://utils.duplojs.dev/en/v1/api/generator/map) For sync iterables
 * @see [`G.asyncFilter`](https://utils.duplojs.dev/en/v1/api/generator/asyncFilter) For filtering values
 * @see https://utils.duplojs.dev/en/v1/api/generator/asyncMap
 * 
 * @namespace G
 * 
 */
export declare function asyncMap<const GenericInput extends unknown, const GenericOutput extends unknown>(theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => GenericOutput): (iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>) => AsyncGenerator<Awaited<GenericOutput>, unknown, unknown>;
export declare function asyncMap<const GenericInput extends unknown, const GenericOutput extends unknown>(iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>, theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => GenericOutput): AsyncGenerator<Awaited<GenericOutput>, unknown, unknown>;
export {};
