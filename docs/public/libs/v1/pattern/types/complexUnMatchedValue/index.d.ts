import { type AnyValue, type IsEqual, type UnionToTuple } from "../../../common";
import { type GetIncompleteUnion } from "./getIncompleteUnion";
import { type ComplexUnMatchedPrimitive } from "./primitive";
import { type ComplexUnMatchedObject } from "./object";
import { type ComplexUnMatchedUnionObject } from "./unionObject";
import { type ComplexUnMatchedArray } from "./array";
import { type PatternValueMaybeAll } from "../pattern";
import { type ComplexUnMatchedMaybeAll } from "./maybeAll";
import { type ComplexUnMatchedFunction } from "./function";
export type ComplexUnMatchedValue<GenericInput extends unknown, GenericPatternValue extends unknown> = (IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput) extends infer InferredInput ? (InferredInput extends any ? UnionToTuple<keyof GetIncompleteUnion<InferredInput, GenericPatternValue>>["length"] extends 0 | 1 ? never : InferredInput : never) extends infer InferredIncompleteUnionInput ? [
    Exclude<InferredInput, InferredIncompleteUnionInput>,
    Exclude<GenericPatternValue, PatternValueMaybeAll>
] extends [
    infer InferredSortedInput,
    infer InferredPatternValue
] ? (ComplexUnMatchedPrimitive<InferredSortedInput, InferredPatternValue> | ComplexUnMatchedObject<InferredSortedInput, InferredPatternValue> | ComplexUnMatchedArray<InferredSortedInput, InferredPatternValue> | ComplexUnMatchedUnionObject<InferredSortedInput, InferredPatternValue> | ComplexUnMatchedFunction<InferredSortedInput, InferredPatternValue> | ComplexUnMatchedMaybeAll<InferredSortedInput, GenericPatternValue> | InferredIncompleteUnionInput) : never : never : never;
