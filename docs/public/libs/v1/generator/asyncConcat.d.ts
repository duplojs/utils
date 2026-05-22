/**
 * Concatenates sync or async iterables into a single async generator.
 * 
 * **Supported call styles:**
 * - Classic: `asyncConcat(iterator, elements, ...elementsRest)` → returns an async generator
 * - Curried: `asyncConcat(elements)` → returns a function waiting for the iterator
 * 
 * All iterables are concatenated in order.
 * Each argument can be either `Iterable` or `AsyncIterable`.
 * 
 * ```ts
 * G.asyncConcat([1, 2], [3], [4]);
 * // AsyncGenerator<1 | 2 | 3 | 4, unknown, unknown>
 * 
 * const asyncNumberTail = (async function *() {
 * 	yield Promise.resolve(3);
 * 	yield 4;
 * })();
 * pipe(
 * 	[1, 2],
 * 	G.asyncConcat(asyncNumberTail),
 * ); // AsyncGenerator<number, unknown, unknown>
 * ```
 * 
 * @see [`G.concat`](https://utils.duplojs.dev/en/v1/api/generator/concat) For sync iterables only
 * @see https://utils.duplojs.dev/en/v1/api/generator/asyncConcat
 * 
 * @namespace G
 * 
 */
export declare function asyncConcat<const GenericElement extends unknown>(elements: AsyncIterable<GenericElement> | Iterable<GenericElement>): (iterator: AsyncIterable<GenericElement> | Iterable<GenericElement>) => AsyncGenerator<GenericElement, unknown, unknown>;
export declare function asyncConcat<const GenericElement extends unknown>(iterator: AsyncIterable<GenericElement> | Iterable<GenericElement>, elements: AsyncIterable<GenericElement> | Iterable<GenericElement>, ...elementsRest: (AsyncIterable<GenericElement> | Iterable<GenericElement>)[]): AsyncGenerator<GenericElement, unknown, unknown>;
