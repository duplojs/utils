import { type Unwrap, type IsEqual } from "@scripts/common";
import { type PatternValueMaybeAll } from "../pattern";

export type ComplexUnMatchedMaybeAll<
	_GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = Extract<
	GenericPatternValue,
	PatternValueMaybeAll
> extends infer InferredPatternValue
	? IsEqual<InferredPatternValue, never> extends true
		? never
		: Unwrap<InferredPatternValue>
	: never;
