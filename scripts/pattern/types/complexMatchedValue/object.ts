import { type Adaptor, type SimplifyTopLevel, type IsEqual } from "@scripts/common";
import { type ComplexMatchedValue } from ".";

export type ComplexMatchedObject<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	[
		Exclude<Extract<GenericInput, object>, readonly any[]>,
		Exclude<Extract<GenericPatternValue, object>, readonly any[]>,
	] extends [
		infer inferredInput,
		infer inferredPatternValue,
	]
		? inferredInput extends any
			? inferredPatternValue extends any
				? Extract<
					inferredInput,
					inferredPatternValue
				> extends infer InferredObviousMatchedValue
					? IsEqual<InferredObviousMatchedValue, never> extends false
						? InferredObviousMatchedValue
						: IsEqual<
							Extract<keyof inferredInput, keyof inferredPatternValue>,
							keyof inferredPatternValue
						> extends false
							? never
							: SimplifyTopLevel<
								& Omit<inferredInput, keyof inferredPatternValue>
								& {
									-readonly [Prop in keyof inferredPatternValue]: Extract<
										ComplexMatchedValue<
											inferredInput[Adaptor<Prop, keyof inferredInput>],
											inferredPatternValue[Prop]
										>,
										any
									>
								}
							> extends infer InferredResult extends inferredInput
								? InferredResult
								: never
					: never
				: never
			: never
		: never
);
