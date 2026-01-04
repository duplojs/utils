interface GeneratorFilterParams {
    index: number;
}
/**
 * Filters values from an iterable.
 * 
 * **Supported call styles:**
 * - Classic: `filter(iterator, predicate)` → returns a generator
 * - Curried: `filter(predicate)` → returns a function waiting for the iterator
 * - Classic predicate: `filter(iterator, isType)` → narrows item types
 * - Curried predicate: `filter(isType)` → narrows item types
 * 
 * The predicate receives `(item, { index })`.
 * The input iterator is not mutated.
 * 
 * ```ts
 * const values = [9, 12, 15, 18, 21];
 * const threshold = 15;
 * 
 * const result = pipe(
 * 	values,
 * 	G.filter((value) => value >= threshold && value % 3 === 0),
 * 	G.reduce(
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
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * 
 * @see [`G.map`](https://utils.duplojs.dev/en/v1/api/generator/map) For mapping values
 * @see [`G.asyncFilter`](https://utils.duplojs.dev/en/v1/api/generator/asyncFilter) For async iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/filter
 * 
 * @namespace G
 * 
 */
export declare function filter<GenericElement extends unknown, GenericOutput extends GenericElement>(predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput): (iterator: Iterable<GenericElement>) => Generator<GenericOutput, unknown, unknown>;
export declare function filter<GenericElement extends unknown, GenericOutput extends GenericElement>(iterator: Iterable<GenericElement>, predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput): Generator<GenericOutput, unknown, unknown>;
export declare function filter<GenericElement extends unknown>(predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean): (iterator: Iterable<GenericElement>) => Generator<GenericElement, unknown, unknown>;
export declare function filter<GenericElement extends unknown>(iterator: Iterable<GenericElement>, predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean): Generator<GenericElement, unknown, unknown>;
export {};
