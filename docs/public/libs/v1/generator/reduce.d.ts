import { type Kind } from "../common/kind";
import { type WrappedValue } from "../common/wrapValue";
import { type Unwrap } from "../common/unwrap";
import { type IsEqual, type ToLargeEnsemble } from "../common";
export interface GeneratorReduceNext<GenericOutput extends unknown = unknown> {
    "-next": GenericOutput;
}
export interface GeneratorReduceExit<GenericOutput extends unknown = unknown> {
    "-exit": GenericOutput;
}
export interface GeneratorReduceFunctionParams<GenericElement extends unknown = unknown, GenericOutput extends unknown = unknown> {
    element: GenericElement;
    index: number;
    lastValue: GenericOutput;
    nextWithObject: GenericOutput extends object ? (object1: GenericOutput, object2: Partial<GenericOutput>) => GeneratorReduceNext<GenericOutput> : undefined;
    next(output: GenericOutput): GeneratorReduceNext<GenericOutput>;
    exit<GenericExitValue extends unknown>(output: GenericExitValue): GeneratorReduceExit<GenericExitValue>;
    nextPush: GenericOutput extends readonly any[] ? (array: GenericOutput, ...values: GenericOutput) => GeneratorReduceExit<GenericOutput> : undefined;
}
declare const generatorReduceFromKind: import("../common").KindHandler<import("../common").KindDefinition<"generator-reduce-from", unknown>>;
export interface GeneratorReduceFromResult<GenericValue extends unknown = unknown> extends Kind<typeof generatorReduceFromKind.definition>, WrappedValue<GenericValue> {
}
/**
 * Creates a typed start value for `reduce`.
 * 
 * Signature: `reduceFrom(value)` → returns a reduce start wrapper
 * 
 * This is useful for preserving object and array types in reductions.
 * 
 * ```ts
 * const result = G.reduce(
 * 	[1, 2],
 * 	G.reduceFrom(0),
 * 	({ element, lastValue, next }) => next(lastValue + element),
 * );
 * ```
 * 
 * @see [`G.reduce`](https://utils.duplojs.dev/en/v1/api/generator/reduce) For reducing iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/reduceFrom
 * 
 * @namespace G
 * 
 */
export declare function reduceFrom<GenericValue extends unknown>(value: GenericValue): GeneratorReduceFromResult<GenericValue>;
export type GeneratorEligibleReduceFromValue = number | string | bigint | boolean | GeneratorReduceFromResult;
export type GeneratorReduceFromValue<GenericValue extends GeneratorEligibleReduceFromValue> = GenericValue extends GeneratorReduceFromResult ? Unwrap<GenericValue> : ToLargeEnsemble<GenericValue>;
/**
 * Reduces an iterable to a single value.
 * 
 * **Supported call styles:**
 * - Classic: `reduce(iterator, startValue, theFunction)` → returns the reduced value
 * - Curried: `reduce(startValue, theFunction)` → returns a function waiting for the iterator
 * 
 * The function receives `{ element, index, lastValue, next, exit, nextWithObject, nextPush }`.
 * The input iterator is not mutated.
 * 
 * ```ts
 * const values = [4, 8, 12];
 * 
 * const result = pipe(
 * 	values,
 * 	G.reduce(
 * 		G.reduceFrom({
 * 			total: 0,
 * 			count: 0,
 * 		}),
 * 		({ element, lastValue, next }) => next({
 * 			total: N.add(lastValue.total, element),
 * 			count: N.add(lastValue.count, 1),
 * 		}),
 * 	),
 * );
 * 
 * ```
 * 
 * @remarks
 * - `exit` stops the reduction early
 * 
 * @see [`G.reduceFrom`](https://utils.duplojs.dev/en/v1/api/generator/reduceFrom) For typed start values
 * @see [`G.asyncReduce`](https://utils.duplojs.dev/en/v1/api/generator/asyncReduce) For async iterables
 * @see https://utils.duplojs.dev/en/v1/api/generator/reduce
 * 
 * @namespace G
 * 
 */
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends GeneratorEligibleReduceFromValue, GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>>(startValue: GenericReduceFrom, theFunction: (params: GeneratorReduceFunctionParams<GenericElement, GeneratorReduceFromValue<GenericReduceFrom>>) => GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit): (iterator: Iterable<GenericElement>) => GeneratorReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, GeneratorReduceExit> extends true ? never : GenericExit["-exit"]);
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends GeneratorEligibleReduceFromValue, GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>>(iterator: Iterable<GenericElement>, startValue: GenericReduceFrom, theFunction: (params: GeneratorReduceFunctionParams<GenericElement, GeneratorReduceFromValue<GenericReduceFrom>>) => GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit): GeneratorReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, GeneratorReduceExit> extends true ? never : GenericExit["-exit"]);
export {};
