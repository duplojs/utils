import { type SimplifyTopLevel, type Adaptor, type IsEqual } from "@scripts/common";
import { type EligiblePrimitiveMatch } from "./pattern";

export type ComplexMatchedValue<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	| (
		[
			Extract<GenericInput, EligiblePrimitiveMatch>,
			Extract<GenericPatternValue, EligiblePrimitiveMatch>,
		] extends [
			infer inferredInput extends EligiblePrimitiveMatch,
			infer inferredPatternValue extends EligiblePrimitiveMatch,
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
	)
	| (
		[
			Extract<GenericInput, object>,
			Extract<GenericPatternValue, object>,
		] extends [
			infer inferredInput extends object,
			infer inferredPatternValue extends object,
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
	)
);
