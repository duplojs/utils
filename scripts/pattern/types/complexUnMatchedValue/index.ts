import { type UnionToTuple } from "@scripts/common";
import { type GetIncompleteUnion } from "./getIncompleteUnion";
import { type ComplexUnMatchedPrimitive } from "./primitive";
import { type ComplexUnMatchedObject } from "./object";
import { type ComplexUnMatchedUnionObject } from "./unionObject";
import { type ComplexUnMatchedArray } from "./array";

export type ComputeComplexUnMatchedValue<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	| ComplexUnMatchedPrimitive<GenericInput, GenericPatternValue>
	| ComplexUnMatchedObject<GenericInput, GenericPatternValue>
	| ComplexUnMatchedArray<GenericInput, GenericPatternValue>
	| ComplexUnMatchedUnionObject<GenericInput, GenericPatternValue>
);

export type ComplexUnMatchedValue<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = UnionToTuple<keyof GetIncompleteUnion<GenericInput, GenericPatternValue>>["length"] extends 0 | 1
	? Extract<ComputeComplexUnMatchedValue<GenericInput, GenericPatternValue>, any>
	: GenericInput;
