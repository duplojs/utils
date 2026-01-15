import { type ComplexMatchedPrimitive } from "./primitive";
import { type ComplexMatchedObject } from "./object";
import { type ComplexMatchedArray } from "./array";
import { type PatternValueMaybeAll } from "../pattern";
import { type ComplexMatchedMaybeAll } from "./maybeAll";
import { type ComplexMatchedFunction } from "./function";
import { type AnyValue, type IsEqual } from "@scripts/common";

export type ComplexMatchedValue<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	IsEqual<GenericInput, unknown> extends true
		? AnyValue
		: GenericInput
) extends infer InferredInput
	? Exclude<
		GenericPatternValue,
		PatternValueMaybeAll
	> extends infer InferredPatternValue
		? (
		| ComplexMatchedPrimitive<InferredInput, InferredPatternValue>
		| ComplexMatchedObject<InferredInput, InferredPatternValue>
		| ComplexMatchedArray<InferredInput, InferredPatternValue>
		| ComplexMatchedFunction<InferredInput, InferredPatternValue>
		// need to use GenericPatternValue
		| ComplexMatchedMaybeAll<InferredInput, GenericPatternValue>
		)
		: never
	: never;
