import { type Kind } from "../common/kind";
import { type WrappedValue } from "../common/wrapValue";
import { type Unwrap } from "../common/unwrap";
import { type IsEqual, type ToLargeEnsemble } from "../common";
export interface ArrayReduceNext<GenericOutput extends unknown = unknown> {
    "-next": GenericOutput;
}
export interface ArrayReduceExit<GenericOutput extends unknown = unknown> {
    "-exit": GenericOutput;
}
export interface ArrayReduceFunctionParams<GenericInputArray extends readonly unknown[] = unknown[], GenericOutput extends unknown = unknown> {
    element: GenericInputArray[number];
    index: number;
    lastValue: GenericOutput;
    nextWithObject: GenericOutput extends object ? (object1: GenericOutput, object2: Partial<GenericOutput>) => ArrayReduceNext<GenericOutput> : undefined;
    next(output: GenericOutput): ArrayReduceNext<GenericOutput>;
    exit<GenericExitValue extends unknown>(output: GenericExitValue): ArrayReduceExit<GenericExitValue>;
    self: GenericInputArray;
    nextPush: GenericOutput extends readonly any[] ? (array: GenericOutput, ...values: GenericOutput) => ArrayReduceNext<GenericOutput> : undefined;
}
declare const arrayReduceFromKind: import("../common").KindHandler<import("../common").KindDefinition<"array-reduce-from", unknown>>;
export interface ArrayReduceFromResult<GenericValue extends unknown = unknown> extends Kind<typeof arrayReduceFromKind.definition>, WrappedValue<GenericValue> {
}
/**
 * Creates a typed start value for `reduce`.
 * 
 * Signature: `reduceFrom(value)` → returns a reduce start wrapper
 * 
 * This is useful for preserving object and array types in reductions.
 * 

 * ```ts
 * A.reduce(
 * 	[1, 2],
 * 	A.reduceFrom(0),
 * 	({ element, lastValue, next }) => next(lastValue + element),
 * ); // 3
 * 
 * A.reduce(
 * 	["alpha", "beta"],
 * 	A.reduceFrom({}),
 * 	({ element, lastValue, nextWithObject }) => nextWithObject(lastValue, { [element]: true }),
 * ); // { alpha: true, beta: true }
 * 
 * A.reduce(
 * 	[1, 2],
 * 	A.reduceFrom([0]),
 * 	({ element, lastValue, nextPush }) => nextPush(lastValue, element),
 * ); // [0, 1, 2]
 * 
 * ```
 * 
 * @see [`A.reduce`](https://utils.duplojs.dev/en/v1/api/array/reduce) For reducing arrays
 * @see https://utils.duplojs.dev/en/v1/api/array/reduceFrom
 * 
 * @namespace A
 * 
 */
export declare function reduceFrom<GenericValue extends unknown>(value: GenericValue): ArrayReduceFromResult<GenericValue>;
export declare const reduceTools: Pick<ArrayReduceFunctionParams<any, any>, "exit" | "next" | "nextWithObject" | "nextPush">;
export type ArrayEligibleReduceFromValue = number | string | bigint | boolean | ArrayReduceFromResult;
export type ArrayReduceFromValue<GenericValue extends ArrayEligibleReduceFromValue> = GenericValue extends ArrayReduceFromResult ? Unwrap<GenericValue> : ToLargeEnsemble<GenericValue>;
/**
 * Reduces an array to a single value.
 * 
 * **Supported call styles:**
 * - Classic: `reduce(array, startValue, theFunction)` → returns the reduced value
 * - Curried: `reduce(startValue, theFunction)` → returns a function waiting for the array
 * 
 * The function receives `{ element, index, lastValue, next, exit, nextWithObject, nextPush, self }`.
 * The input array is not mutated.
 * 

 * ```ts
 * A.reduce(
 * 	[1, 2, 3],
 * 	0,
 * 	({ element, lastValue, next }) => next(lastValue + element),
 * ); // 6
 * 
 * pipe(
 * 	[1, 2],
 * 	A.reduce(1, ({ element, lastValue, next }) => next(lastValue * element)),
 * ); // 2
 * 
 * A.reduce(
 * 	[1, 2, 3],
 * 	0,
 * 	({ element, lastValue, next, exit }) => element === 2 ? exit(lastValue) : next(lastValue + element),
 * ); // 1
 * 
 * ```
 * 
 * @remarks
 * - `exit` stops the reduction early
 * 
 * @see [`A.reduceFrom`](https://utils.duplojs.dev/en/v1/api/array/reduceFrom) For typed start values
 * @see [`A.reduceRight`](https://utils.duplojs.dev/en/v1/api/array/reduceRight) For reducing from the end
 * @see https://utils.duplojs.dev/en/v1/api/array/reduce
 * 
 * @namespace A
 * 
 */
export declare function reduce<GenericInput extends readonly unknown[], GenericReduceFrom extends ArrayEligibleReduceFromValue, GenericExit extends ArrayReduceExit = ArrayReduceExit<never>>(startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericInput, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit): (input: GenericInput) => ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"]);
export declare function reduce<GenericInput extends readonly unknown[], GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult, GenericExit extends ArrayReduceExit = ArrayReduceExit<never>>(input: GenericInput, startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericInput, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit): ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"]);
export {};
