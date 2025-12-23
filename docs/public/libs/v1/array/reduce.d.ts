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
export declare function reduceFrom<GenericValue extends unknown>(value: GenericValue): ArrayReduceFromResult<GenericValue>;
export declare const reduceTools: Pick<ArrayReduceFunctionParams<any, any>, "exit" | "next" | "nextWithObject" | "nextPush">;
export type ArrayEligibleReduceFromValue = number | string | bigint | boolean | ArrayReduceFromResult;
export type ArrayReduceFromValue<GenericValue extends ArrayEligibleReduceFromValue> = GenericValue extends ArrayReduceFromResult ? Unwrap<GenericValue> : ToLargeEnsemble<GenericValue>;
export declare function reduce<GenericInput extends readonly unknown[], GenericReduceFrom extends ArrayEligibleReduceFromValue, GenericExit extends ArrayReduceExit = ArrayReduceExit<never>>(startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericInput, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit): (input: GenericInput) => ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"]);
export declare function reduce<GenericInput extends readonly unknown[], GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult, GenericExit extends ArrayReduceExit = ArrayReduceExit<never>>(input: GenericInput, startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericInput, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit): ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"]);
export {};
