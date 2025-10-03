import { type IsUnion } from "@scripts/common";
import { type ComputeComplexUnMatchedValue } from ".";

export type ComplexUnMatchedUnionObject<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	IsUnion<Extract<GenericPatternValue, object>> extends false
		? never
		: Extract<GenericPatternValue, any> extends infer inferredPatternValue
			? inferredPatternValue extends object
				? ComputeComplexUnMatchedValue<GenericInput, inferredPatternValue> extends infer InferredResult
					? ComputeComplexUnMatchedValue<
						InferredResult,
						Exclude<GenericPatternValue, inferredPatternValue>
					>
					: never
				: never
			: never
);
