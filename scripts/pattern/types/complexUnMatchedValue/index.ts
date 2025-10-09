import { type UnionToTuple } from "@scripts/common";
import { type GetIncompleteUnion } from "./getIncompleteUnion";
import { type ComplexUnMatchedPrimitive } from "./primitive";
import { type ComplexUnMatchedObject } from "./object";
import { type ComplexUnMatchedUnionObject } from "./unionObject";
import { type ComplexUnMatchedArray } from "./array";
import { type PatternValueMaybeAll } from "../pattern";
import { type ComplexUnMatchedMaybeAll } from "./maybeAll";

export type ComplexUnMatchedValue<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = UnionToTuple<keyof GetIncompleteUnion<GenericInput, GenericPatternValue>>["length"] extends 0 | 1
	? Exclude<
		GenericPatternValue,
		PatternValueMaybeAll
	> extends infer InferredPatternValue
		? (
			| ComplexUnMatchedPrimitive<GenericInput, InferredPatternValue>
			| ComplexUnMatchedObject<GenericInput, InferredPatternValue>
			| ComplexUnMatchedArray<GenericInput, InferredPatternValue>
			| ComplexUnMatchedUnionObject<GenericInput, InferredPatternValue>
			| ComplexUnMatchedMaybeAll<GenericInput, GenericPatternValue>
		)
		: never
	: GenericInput;
