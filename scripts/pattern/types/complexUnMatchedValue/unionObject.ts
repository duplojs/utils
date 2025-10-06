import { type IsUnion, type LastUnionElement } from "@scripts/common";
import { type ComputeComplexUnMatchedValue } from ".";

export type ComplexUnMatchedUnionObject<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	IsUnion<Extract<GenericPatternValue, object>> extends false
		? never
		: Extract<GenericPatternValue, any> extends infer InferredPatternValue
			? LastUnionElement<
				InferredPatternValue extends object
					? ComputeComplexUnMatchedValue<GenericInput, InferredPatternValue> extends infer InferredResult
						? ComputeComplexUnMatchedValue<
							InferredResult,
							Exclude<GenericPatternValue, InferredPatternValue>
						>
						: never
					: never
			>
			: never
);
