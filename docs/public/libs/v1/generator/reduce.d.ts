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
}
declare const generatorReduceFromKind: import("../common").KindHandler<import("../common").KindDefinition<"generator-reduce-from", unknown>>;
export interface GeneratorReduceFromResult<GenericValue extends unknown = unknown> extends Kind<typeof generatorReduceFromKind.definition>, WrappedValue<GenericValue> {
}
export declare function reduceFrom<GenericValue extends unknown>(value: GenericValue): GeneratorReduceFromResult<GenericValue>;
export type GeneratorEligibleReduceFromValue = number | string | bigint | boolean | GeneratorReduceFromResult;
export type GeneratorReduceFromValue<GenericValue extends GeneratorEligibleReduceFromValue> = GenericValue extends GeneratorReduceFromResult ? Unwrap<GenericValue> : ToLargeEnsemble<GenericValue>;
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends GeneratorEligibleReduceFromValue, GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>>(startValue: GenericReduceFrom, theFunction: (params: GeneratorReduceFunctionParams<GenericElement, GeneratorReduceFromValue<GenericReduceFrom>>) => GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit): (iterator: Iterable<GenericElement>) => GeneratorReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, GeneratorReduceExit> extends true ? never : GenericExit["-exit"]);
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends GeneratorEligibleReduceFromValue, GenericExit extends GeneratorReduceExit = GeneratorReduceExit<never>>(iterator: Iterable<GenericElement>, startValue: GenericReduceFrom, theFunction: (params: GeneratorReduceFunctionParams<GenericElement, GeneratorReduceFromValue<GenericReduceFrom>>) => GeneratorReduceNext<GeneratorReduceFromValue<GenericReduceFrom>> | GenericExit): GeneratorReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, GeneratorReduceExit> extends true ? never : GenericExit["-exit"]);
export {};
