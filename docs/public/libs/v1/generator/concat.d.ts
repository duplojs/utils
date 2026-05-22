/**
 * Concatenates iterables into a single generator.
 * 
 * **Supported call styles:**
 * - Classic: `concat(iterator, elements, ...elementsRest)` → returns a generator
 * - Curried: `concat(elements)` → returns a function waiting for the iterator
 * 
 * All iterables are concatenated in order.
 * The input iterables are not mutated.
 * 
 * ```ts
 * G.concat([1, 2], [3], [4]); // Generator<1 | 2 | 3 | 4, unknown, unknown>
 * 
 * pipe(
 * 	[1, 2, 3],
 * 	G.concat(<number[]>[4, 5]),
 * ); // Generator<number, unknown, unknown>
 * ```
 * 
 * @see [`G.asyncConcat`](https://utils.duplojs.dev/en/v1/api/generator/asyncConcat) For async or mixed iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/concat
 * 
 * @namespace G
 * 
 */
export declare function concat<const GenericElement extends unknown>(elements: Iterable<GenericElement>): (iterator: Iterable<GenericElement>) => Generator<GenericElement, unknown, unknown>;
export declare function concat<const GenericElement extends unknown>(iterator: Iterable<GenericElement>, elements: Iterable<GenericElement>, ...elementsRest: Iterable<GenericElement>[]): Generator<GenericElement, unknown, unknown>;
