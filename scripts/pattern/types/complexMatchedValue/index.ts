import { type ComplexMatchedPrimitive } from "./primitive";
import { type ComplexMatchedObject } from "./object";
import { type ComplexMatchedArray } from "./array";

export type ComplexMatchedValue<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	| ComplexMatchedPrimitive<GenericInput, GenericPatternValue>
	| ComplexMatchedObject<GenericInput, GenericPatternValue>
	| ComplexMatchedArray<GenericInput, GenericPatternValue>
);
