import { type AnyValue } from "./types/anyValue";
interface LoopOutputExistResult<GenericOutput extends any> {
    "-exitData": GenericOutput;
}
interface LoopOutputNextResult<GenericOutput extends any> {
    "-nextData": GenericOutput;
}
export interface LoopParams<GenericRawNextOutput extends any> {
    count: number;
    previousOutput: GenericRawNextOutput | undefined;
    next<GenericValue extends GenericRawNextOutput | undefined = undefined>(output?: GenericValue): LoopOutputNextResult<GenericValue>;
    exit<GenericOutput extends AnyValue = undefined>(output?: GenericOutput): LoopOutputExistResult<GenericOutput>;
}
/**
 * The loop() function runs a loop controlled via the next and exit callbacks. Each iteration receives the counter and the previous output to drive the flow.
 * 
 * Signature: `loop(from, theFunction)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = loop<number, number>(
 * 	({ previousOutput, next, exit }) => {
 * 		const current = (previousOutput ?? 0) + 1;
 * 		if (current >= 5) {
 * 			return exit(current);
 * 		}
 * 
 * 		return next(current);
 * 	},
 * );
 * // result: 5
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/loop
 * 
 * @namespace C
 * 
 */
export declare function loop<GenericRawExitOutput extends AnyValue = undefined, GenericRawNextOutput extends AnyValue = undefined>(loop: (params: LoopParams<GenericRawNextOutput>) => LoopOutputNextResult<GenericRawNextOutput> | LoopOutputExistResult<GenericRawExitOutput>): GenericRawExitOutput;
export {};
