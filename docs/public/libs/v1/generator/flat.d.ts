import { type FlatIterator } from "./types";
/**
 * Flattens nested iterables into a single generator.
 * 
 * **Supported call styles:**
 * - Classic: `flat(iterator, depth?)` → returns a generator
 * 
 * By default, `flat` flattens one level.
 * Use `depth` to control how many iterable levels are expanded.
 * Non-iterable values are yielded as-is.
 * 
 * ```ts
 * const oneLevel = G.flat([[1, 2], [3, 4]]);
 * // Generator<number, void, unknown>
 * 
 * const twoLevels = G.flat(
 * 	[[[1], [2]], [[3], [4]]],
 * 	2,
 * );
 * // Generator<number, void, unknown>
 * 
 * const keepLastLevel = G.flat(
 * 	[[[1], [2]], [[3], [4]]],
 * 	1,
 * );
 * // Generator<number[], void, unknown>
 * 
 * ```
 * 
 * @see [`G.asyncFlat`](https://utils.duplojs.dev/en/v1/api/generator/asyncFlat) For async iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/flat
 * 
 * @namespace G
 * 
 */
export declare function flat<GenericValue extends unknown, GenericDepth extends number = 1>(iterator: Iterable<GenericValue>, depth?: GenericDepth): Generator<FlatIterator<GenericValue, GenericDepth>, void, unknown>;
