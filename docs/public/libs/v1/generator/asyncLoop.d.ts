import { type MaybePromise } from "../common";
import { type LoopOutputExistResult, type LoopOutputNextResult, type GeneratorLoopParams } from "./loop";
/**
 * Creates an async generator from a loop function.
 * 
 * Signature: `asyncLoop(loopFunction)` → returns an async generator
 * 
 * The loop receives `{ count, previousOutput, next, exit }`.
 * The generator ends when `exit` is returned.
 * 
 * ```ts
 * const limit = 3;
 * 
 * const iterator = G.asyncLoop(async(
 * 	{
 * 		count,
 * 		next,
 * 		exit,
 * 	}: G.GeneratorLoopParams<number>,
 * ) => {
 * 	if (count === limit) {
 * 		return exit();
 * 	}
 * 	const response = await fetch(`https://api.example.com/pages/${count + 1}`);
 * 	const { id: pageId } = await response.json() as { id: number };
 * 	return next(pageId);
 * });
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
 * @see [`G.loop`](https://utils.duplojs.dev/en/v1/api/generator/loop) For sync loops
 * @see https://utils.duplojs.dev/en/v1/api/generator/asyncLoop
 * 
 * @namespace G
 * 
 */
export declare function asyncLoop<GenericRawNextOutput extends unknown, GenericOutput extends MaybePromise<LoopOutputNextResult<GenericRawNextOutput> | LoopOutputExistResult<unknown> | LoopOutputNextResult<undefined> | LoopOutputExistResult<undefined>>>(loop: (params: GeneratorLoopParams<GenericRawNextOutput>) => GenericOutput): AsyncGenerator<Exclude<Awaited<GenericOutput> extends infer InferredOutput ? InferredOutput extends LoopOutputNextResult ? InferredOutput["-nextData"] : InferredOutput extends LoopOutputExistResult ? InferredOutput["-exitData"] : never : never, undefined>, unknown, unknown>;
