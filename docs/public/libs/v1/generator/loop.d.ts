import { type AnyValue } from "../common";
export interface LoopOutputExistResult<GenericOutput extends unknown = unknown> {
    "-exitData": GenericOutput;
}
export interface LoopOutputNextResult<GenericOutput extends unknown = unknown> {
    "-nextData": GenericOutput;
}
export interface GeneratorLoopParams<GenericRawNextOutput extends any> {
    count: number;
    previousOutput: GenericRawNextOutput | undefined;
    next<GenericValue extends GenericRawNextOutput | undefined = undefined>(output?: GenericValue): LoopOutputNextResult<GenericValue>;
    exit<GenericOutput extends AnyValue = undefined>(output?: GenericOutput): LoopOutputExistResult<GenericOutput>;
}
/**
 * Creates a generator from a loop function.
 * 
 * Signature: `loop(loopFunction)` → returns a generator
 * 
 * The loop receives `{ count, previousOutput, next, exit }`.
 * The generator ends when `exit` is returned.
 * 
 * ```ts
 * const limit = 4;
 * 
 * const result = pipe(
 * 	G.loop(({ count, next, exit }: G.GeneratorLoopParams<number>) => {
 * 		if (count > limit) {
 * 			return exit();
 * 		}
 * 		return next(count * 2);
 * 	}),
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
 * @see [`G.asyncLoop`](https://utils.duplojs.dev/en/v1/api/generator/asyncLoop) For async loops
 * @see https://utils.duplojs.dev/en/v1/api/generator/loop
 * 
 * @namespace G
 * 
 */
export declare function loop<GenericRawExitOutput extends AnyValue = undefined, GenericRawNextOutput extends AnyValue = undefined>(loop: (params: GeneratorLoopParams<GenericRawNextOutput>) => LoopOutputNextResult<GenericRawNextOutput> | LoopOutputNextResult<undefined> | LoopOutputExistResult<GenericRawExitOutput> | LoopOutputExistResult<undefined>): Generator<Exclude<GenericRawExitOutput | GenericRawNextOutput, undefined>, unknown, unknown>;
