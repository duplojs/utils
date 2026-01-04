import { type GeneratorReduceFromValue, type GeneratorEligibleReduceFromValue, type GeneratorReduceFunctionParams, type GeneratorReduceExit, type GeneratorReduceNext } from "./reduce";
import { type IsEqual, type MaybePromise } from "../common";
/**
 * Reduces an iterable to a single value with async support.
 * 
 * **Supported call styles:**
 * - Classic: `asyncReduce(iterator, startValue, theFunction)` → returns a promise
 * - Curried: `asyncReduce(startValue, theFunction)` → returns a function waiting for the iterator
 * 
 * The function receives `{ element, index, lastValue, next, exit, nextWithObject }`.
 * The input iterator is not mutated.
 * 
 * ```ts
 * const values = [10, 20, 30];
 * 
 * const result = await G.asyncReduce(
 * 	values,
 * 	G.reduceFrom(0),
 * 	async({ element, lastValue, next }) => {
 * 		const response = await fetch("https://api.example.com/tax");
 * 		const { rate } = await response.json() as { rate: number };
 * 		return next(N.add(lastValue, N.multiply(element, rate)));
 * 	},
 * );
 * 
 * ```
 * 
 * @remarks
 * - `exit` stops the reduction early
 * 
 * @see [`G.reduce`](https://utils.duplojs.dev/en/v1/api/generator/reduce) For sync iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/asyncReduce
 * 
 * @namespace G
 * 
 */
export declare function asyncReduce<GenericElement extends unknown, GenericReduceFrom extends GeneratorEligibleReduceFromValue, GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>>(startValue: GenericReduceFrom, theFunction: (params: GeneratorReduceFunctionParams<GenericElement, GeneratorReduceFromValue<GenericReduceFrom>>) => MaybePromise<GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit>): (iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>) => Promise<GeneratorReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, GeneratorReduceExit> extends true ? never : GenericExit["-exit"])>;
export declare function asyncReduce<GenericElement extends unknown, GenericReduceFrom extends GeneratorEligibleReduceFromValue, GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>>(iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>, startValue: GenericReduceFrom, theFunction: (params: GeneratorReduceFunctionParams<GenericElement, GeneratorReduceFromValue<GenericReduceFrom>>) => MaybePromise<GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit>): Promise<GeneratorReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, GeneratorReduceExit> extends true ? never : GenericExit["-exit"])>;
