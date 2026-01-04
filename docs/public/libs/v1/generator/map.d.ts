interface GeneratorMapParams {
    index: number;
}
/**
 * Maps values from an iterable to a new generator.
 * 
 * **Supported call styles:**
 * - Classic: `map(iterator, theFunction)` → returns a generator
 * - Curried: `map(theFunction)` → returns a function waiting for the iterator
 * 
 * The function receives `(item, { index })`.
 * The input iterator is not mutated.
 * 
 * @example
 * ```ts
 * const values = [8, 12, 20];
 * const rate = 1.1;
 * 
 * const result = pipe(
 * 	values,
 * 	G.map((value) => N.multiply(value, rate)),
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
 * @see [`G.filter`](https://utils.duplojs.dev/en/v1/api/generator/filter) For filtering values
 * @see [`G.asyncMap`](https://utils.duplojs.dev/en/v1/api/generator/asyncMap) For async iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/map
 * 
 * @namespace G
 * 
 */
export declare function map<const GenericInput extends unknown, const GenericOutput extends unknown>(theFunction: (arg: GenericInput, params: GeneratorMapParams) => GenericOutput): (iterator: Iterable<GenericInput>) => Generator<GenericOutput, unknown, unknown>;
export declare function map<const GenericInput extends unknown, const GenericOutput extends unknown>(iterator: Iterable<GenericInput>, theFunction: (arg: GenericInput, params: GeneratorMapParams) => GenericOutput): Generator<GenericOutput, unknown, unknown>;
export {};
