import { type Kind } from "../common/kind";
import { type WrappedValue } from "../common/wrapValue";
import { type Unwrap } from "../common/unwrap";
import { type ToLargeEnsemble } from "../common";
interface ArrayReduceNext<GenericOutput extends unknown> {
    "-next": GenericOutput;
}
interface ArrayReduceExit<GenericOutput extends unknown> {
    "-exit": GenericOutput;
}
export type ArrayReduceExitOrNext<GenericOutput extends unknown = unknown> = ArrayReduceExit<GenericOutput> | ArrayReduceNext<GenericOutput>;
export interface ArrayReduceFunctionParams<GenericElement extends unknown = unknown, GenericOutput extends unknown = unknown> {
    element: GenericElement;
    index: number;
    lastValue: GenericOutput;
    nextWithObject: GenericOutput extends object ? (object1: GenericOutput, object2: Partial<GenericOutput>) => ArrayReduceNext<GenericOutput> : undefined;
    next(output: GenericOutput): ArrayReduceNext<GenericOutput>;
    exit(output: GenericOutput): ArrayReduceExit<GenericOutput>;
}
declare const arrayReduceFromKind: import("../common").KindHandler<import("../common").KindDefinition<"array-reduce-from", unknown>>;
export interface ArrayReduceFromResult<GenericValue extends unknown = unknown> extends Kind<typeof arrayReduceFromKind.definition>, WrappedValue<GenericValue> {
}
export declare function reduceFrom<GenericValue extends unknown>(value: GenericValue): ArrayReduceFromResult<GenericValue>;
export type ArrayEligibleReduceFromValue = number | string | bigint | boolean | ArrayReduceFromResult;
export type ArrayReduceFromValue<GenericValue extends ArrayEligibleReduceFromValue> = GenericValue extends ArrayReduceFromResult ? Unwrap<GenericValue> : ToLargeEnsemble<GenericValue>;
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends ArrayEligibleReduceFromValue>(startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericElement, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceExitOrNext<ArrayReduceFromValue<GenericReduceFrom>>): (array: readonly GenericElement[]) => ArrayReduceFromValue<GenericReduceFrom>;
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult>(array: readonly GenericElement[], startValue: GenericReduceFrom, theFunction: (params: ArrayReduceFunctionParams<GenericElement, ArrayReduceFromValue<GenericReduceFrom>>) => ArrayReduceExitOrNext<ArrayReduceFromValue<GenericReduceFrom>>): ArrayReduceFromValue<GenericReduceFrom>;
export {};
