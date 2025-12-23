import { type ComplexMatchedPrimitive } from "./primitive";
import { type ComplexMatchedObject } from "./object";
import { type ComplexMatchedArray } from "./array";
import { type PatternValueMaybeAll } from "../pattern";
import { type ComplexMatchedMaybeAll } from "./maybeAll";
export type ComplexMatchedValue<GenericInput extends unknown, GenericPatternValue extends unknown> = Exclude<GenericPatternValue, PatternValueMaybeAll> extends infer InferredPatternValue ? (ComplexMatchedPrimitive<GenericInput, InferredPatternValue> | ComplexMatchedObject<GenericInput, InferredPatternValue> | ComplexMatchedArray<GenericInput, InferredPatternValue> | ComplexMatchedMaybeAll<GenericInput, GenericPatternValue>) : never;
