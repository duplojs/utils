import { type Kind } from "../common/kind";
import { type WrappedValue } from "../common/wrapValue";
import { type Unwrap } from "../common/unwrap";
import { type ToLargeEnsemble } from "../common";
interface GeneratorReduceNext<GenericOutput extends unknown> {
    "-next": GenericOutput;
}
interface GeneratorReduceExit<GenericOutput extends unknown> {
    "-exit": GenericOutput;
}
export type GeneratorReduceExitOrNext<GenericOutput extends unknown = unknown> = GeneratorReduceExit<GenericOutput> | GeneratorReduceNext<GenericOutput>;
export interface GeneratorReduceFunctionParams<GenericElement extends unknown = unknown, GenericOutput extends unknown = unknown> {
    element: GenericElement;
    index: number;
    lastValue: GenericOutput;
    nextWithObject: GenericOutput extends object ? (object1: GenericOutput, object2: Partial<GenericOutput>) => GeneratorReduceNext<GenericOutput> : undefined;
    next(output: GenericOutput): GeneratorReduceNext<GenericOutput>;
    exit(output: GenericOutput): GeneratorReduceExit<GenericOutput>;
}
declare const generatorReduceFromKind: import("../common").KindHandler<import("../common").KindDefinition<"generator-reduce-from", unknown>>;
export interface GeneratorReduceFromResult<GenericValue extends unknown = unknown> extends Kind<typeof generatorReduceFromKind.definition>, WrappedValue<GenericValue> {
}
export declare function reduceFrom<GenericValue extends unknown>(value: GenericValue): GeneratorReduceFromResult<GenericValue>;
export type GeneratorEligibleReduceFromValue = number | string | bigint | boolean | GeneratorReduceFromResult;
export type GeneratorReduceFromValue<GenericValue extends GeneratorEligibleReduceFromValue> = GenericValue extends GeneratorReduceFromResult ? Unwrap<GenericValue> : ToLargeEnsemble<GenericValue>;
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends GeneratorEligibleReduceFromValue>(startValue: GenericReduceFrom, theFunction: (params: GeneratorReduceFunctionParams<GenericElement, GeneratorReduceFromValue<GenericReduceFrom>>) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>): (iterator: Iterable<GenericElement>) => GeneratorReduceFromValue<GenericReduceFrom>;
export declare function reduce<GenericElement extends unknown, GenericReduceFrom extends GeneratorEligibleReduceFromValue>(iterator: Iterable<GenericElement>, startValue: GenericReduceFrom, theFunction: (params: GeneratorReduceFunctionParams<GenericElement, GeneratorReduceFromValue<GenericReduceFrom>>) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>): GeneratorReduceFromValue<GenericReduceFrom>;
export {};
