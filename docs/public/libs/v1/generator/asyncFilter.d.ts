interface AsyncGeneratorFilterParams {
    index: number;
}
/**
 * Filters values from an iterable with async support.
 * 
 * **Supported call styles:**
 * - Classic: `asyncFilter(iterator, predicate)` → returns an async generator
 * - Curried: `asyncFilter(predicate)` → returns a function waiting for the iterator
 * - Classic predicate: `asyncFilter(iterator, isType)` → narrows item types
 * - Curried predicate: `asyncFilter(isType)` → narrows item types
 * 
 * The predicate receives `(item, { index })`.
 * The input iterator is not mutated.
 * 
 * ```ts
 * const ids = [201, 202, 203, 204];
 * 
 * const response = await fetch("https://api.example.com/orders/status");
 * const { statuses } = await response.json() as {
 * 	statuses: {
 * 		id: number;
 * 		status: string;
 * 	}[];
 * };
 * const statusById = new Map(statuses.map(({ id: orderId, status }) => [
 * 	orderId,
 * 	status,
 * ]));
 * 
 * const iterator = G.asyncFilter(ids, (orderId) => statusById.get(orderId) === "paid");
 * 
 * const result = await G.asyncReduce(
 * 	iterator,
 * 	G.reduceFrom<number[]>([]),
 * 	({ element, lastValue, next }) => next([
 * 		...lastValue,
 * 		element,
 * 	]),
 * );
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * 
 * @see [`G.filter`](https://utils.duplojs.dev/en/v1/api/generator/filter) For sync iterables
 * @see [`G.asyncMap`](https://utils.duplojs.dev/en/v1/api/generator/asyncMap) For mapping values
 * @see https://utils.duplojs.dev/en/v1/api/generator/asyncFilter
 * 
 * @namespace G
 * 
 */
export declare function asyncFilter<GenericElement extends unknown, GenericOutput extends GenericElement>(predicate: (item: GenericElement, params: AsyncGeneratorFilterParams) => item is GenericOutput): (iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>) => AsyncGenerator<GenericOutput, unknown, unknown>;
export declare function asyncFilter<GenericElement extends unknown, GenericOutput extends GenericElement>(iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>, predicate: (item: GenericElement, params: AsyncGeneratorFilterParams) => item is GenericOutput): AsyncGenerator<GenericOutput, unknown, unknown>;
export declare function asyncFilter<GenericElement extends unknown>(predicate: (item: GenericElement, params: AsyncGeneratorFilterParams) => boolean): (iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>) => AsyncGenerator<GenericElement, unknown, unknown>;
export declare function asyncFilter<GenericElement extends unknown>(iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>, predicate: (item: GenericElement, params: AsyncGeneratorFilterParams) => boolean): AsyncGenerator<GenericElement, unknown, unknown>;
export {};
