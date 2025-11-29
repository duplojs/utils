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
export interface ArrayReduceFunctionParams<GenericElement extends unknown = unknown, GenericOutput extends unknown = unknown> {
    element: GenericElement;
    index: number;
    lastValue: GenericOutput;
    nextWithObject: GenericOutput extends object ? (object1: GenericOutput, object2: Partial<GenericOutput>) => ArrayReduceNext<GenericOutput> : undefined;
    next(output: GenericOutput): ArrayReduceNext<GenericOutput>;
    exit<GenericExitValue extends unknown>(output: GenericExitValue): ArrayReduceExit<GenericExitValue>;
}
declare const arrayReduceFromKind: import("../common").KindHandler<import("../common").KindDefinition<"array-reduce-from", unknown>>;
export interface ArrayReduceFromResult<GenericValue extends unknown = unknown> extends Kind<typeof arrayReduceFromKind.definition>, WrappedValue<GenericValue> {
}
export declare function reduceFrom<GenericValue extends unknown>(value: GenericValue): ArrayReduceFromResult<GenericValue>;
export type ArrayEligibleReduceFromValue = number | string | bigint | boolean | ArrayReduceFromResult;
export type ArrayReduceFromValue<GenericValue extends ArrayEligibleReduceFromValue> = GenericValue extends ArrayReduceFromResult ? Unwrap<GenericValue> : ToLargeEnsemble<GenericValue>;
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends ArrayEligibleReduceFromValue, GenericExit extends ArrayReduceExit = ArrayReduceExit<never>>(startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericElement, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit): (array: readonly GenericElement[]) => ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"]);
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult, GenericExit extends ArrayReduceExit = ArrayReduceExit<never>>(array: readonly GenericElement[], startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericElement, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit): ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"]);
export {};
