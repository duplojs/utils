import { type LoopParams } from "./loop";
import { type AnyValue } from "./types/anyValue";
interface LoopOutputExistResult<GenericOutput extends any> {
    "-exitData": GenericOutput;
}
interface LoopOutputNextResult<GenericOutput extends any> {
    "-nextData": GenericOutput;
}
/**
 * The asyncLoop() function is the asynchronous variant of loop. Each iteration can return a promise before deciding to continue (next) or exit (exit).
 * 
 * Signature: `asyncLoop(from, theFunction)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = await asyncLoop<number, number>(
 * 	async({ count, previousOutput, next, exit }) => {
 * 		const current = (previousOutput ?? 0) + 1;
 * 
 * 		await Promise.resolve();
 * 
 * 		if (count >= 2) {
 * 			return exit(current);
 * 		}
 * 
 * 		return next(current);
 * 	},
 * );
 * // result: 3
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/asyncLoop
 * 
 * @namespace C
 * 
 */
export declare function asyncLoop<GenericRawExitOutput extends AnyValue = undefined, GenericRawNextOutput extends AnyValue = undefined>(loop: (params: LoopParams<GenericRawNextOutput>) => Promise<LoopOutputNextResult<GenericRawNextOutput | undefined> | LoopOutputExistResult<GenericRawExitOutput>>): Promise<GenericRawExitOutput>;
export {};
