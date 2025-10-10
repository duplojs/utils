import { type Adaptor, type SimplifyTopLevel, type IsEqual } from "@scripts/common";
import { type ComplexMatchedValue } from ".";
import { type GetPropsWithValue } from "@scripts/object";

export type ComplexMatchedObject<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	[
		Exclude<Extract<GenericInput, object>, readonly any[]>,
		Exclude<Extract<GenericPatternValue, object>, readonly any[]>,
	] extends [
		infer InferredInput,
		infer InferredPatternValue,
	]
		? InferredInput extends any
			? InferredPatternValue extends any
				? Extract<
					InferredInput,
					InferredPatternValue
				> extends infer InferredObviousMatchedValue
					? IsEqual<InferredObviousMatchedValue, never> extends false
						? InferredObviousMatchedValue
						: IsEqual<
							Extract<keyof InferredInput, keyof InferredPatternValue>,
							keyof InferredPatternValue
						> extends false
							? never
							: SimplifyTopLevel<
								& Omit<InferredInput, keyof InferredPatternValue>
								& {
									-readonly [Prop in keyof InferredPatternValue]: Extract<
										ComplexMatchedValue<
											InferredInput[Adaptor<Prop, keyof InferredInput>],
											InferredPatternValue[Prop]
										>,
										any
									>
								}
							> extends infer InferredResult extends object
								? Extract<InferredResult, any> extends InferredInput
									? IsEqual<InferredResult, InferredInput> extends true
										? InferredInput
										: IsEqual<
											GetPropsWithValue<
												Pick<
													InferredResult,
													Adaptor<keyof InferredPatternValue, keyof InferredResult>
												>,
												never
											>,
											never
										> extends true
											? InferredResult
											: never
									: never
								: never
					: never
				: never
			: never
		: never
);
