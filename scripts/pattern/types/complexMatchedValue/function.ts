import { type AnyFunction, type IsEqual } from "@scripts/common";

export type ComplexMatchedFunction<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	[
		Extract<GenericInput, AnyFunction>,
		Extract<GenericPatternValue, AnyFunction>,
	] extends [
		infer inferredInput extends AnyFunction,
		infer inferredPatternValue extends AnyFunction,
	]
		? Extract<
			inferredInput,
			inferredPatternValue
		> extends infer inferredValue
			? IsEqual<inferredValue, never> extends true
				? inferredPatternValue
				: inferredValue
			: never
		: never
);
