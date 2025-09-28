import { type SimplifyTopLevel, type Adaptor, type IsEqual, type NeverCoalescing, type IsUnion, type UnionToTuple } from "@scripts/common";
import { type EligiblePrimitiveMatch } from "./pattern";
import { type GetPropsWithValue } from "@scripts/object";
import { type FlatObject } from "@scripts/object/types/flatObject";

type GetIncompleteUnion<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	| (
		[
			Extract<GenericInput, EligiblePrimitiveMatch>,
			Extract<GenericPatternValue, EligiblePrimitiveMatch>,
		] extends [
			infer inferredInput,
			infer inferredPatternValue,
		]
			? IsEqual<Exclude<inferredInput, inferredPatternValue>, never> extends true
				? never
				: true
			: never
	)
	| (
		[
			Exclude<Extract<GenericInput, object>, GenericPatternValue>,
			Extract<GenericPatternValue, object>,
		] extends [
			infer inferredInput,
			infer inferredPatternValue,
		]
			? IsEqual<inferredPatternValue, never> extends true
				? never
				: {
					[Prop in (inferredPatternValue extends any ? keyof inferredPatternValue : never)]:
					GetIncompleteUnion<
						inferredInput[Adaptor<Prop, keyof inferredInput>],
						inferredPatternValue[Prop]
					>
				} extends infer InferredResult extends object
					? FlatObject<
						Omit<InferredResult, GetPropsWithValue<InferredResult, never>>
					>
					: never

			: never
	)
);

type ComputeComplexUnMatchedValue<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	| (
		[
			Extract<GenericInput, EligiblePrimitiveMatch>,
			Extract<GenericPatternValue, EligiblePrimitiveMatch>,
		] extends [
			infer inferredInput,
			infer inferredPatternValue,
		]
			? NeverCoalescing<
				Exclude<
					inferredInput,
					inferredPatternValue
				>,
				inferredInput
			>
			: never
	)
	| (
		[
			Extract<GenericInput, object>,
			Extract<GenericPatternValue, object>,
		] extends [
			infer inferredInput,
			infer inferredPatternValue,
		]
			// (pattern: string, input: object) -> object
			? IsEqual<inferredPatternValue, never> extends true
				? inferredInput
				: IsUnion<inferredPatternValue> extends true
					? never
					// each inferredInput
					: inferredInput extends any
						// remove type obviously extends with pattern
						? inferredInput extends inferredPatternValue
							? never
							// if inferredInput have fewer keys, un match then
							: IsEqual<
								Extract<keyof inferredInput, keyof inferredPatternValue>,
								keyof inferredPatternValue
							> extends false
								? inferredInput
								: SimplifyTopLevel<
									& Omit<inferredInput, keyof inferredPatternValue>
									& {
										-readonly [Prop in keyof inferredPatternValue]: NeverCoalescing<
											Extract<
												ComputeComplexUnMatchedValue<
													inferredInput[Adaptor<Prop, keyof inferredInput>],
													inferredPatternValue[Prop]
												>,
												any
											>,
											inferredInput[Adaptor<Prop, keyof inferredInput>]
										>
									} extends infer InferredObject extends object
										// {prop: string | undefined} -> {prop?: string | undefined}
										// (no perfect but most safety)
										? (
											& {
												[
												Prop in keyof InferredObject as
												undefined extends InferredObject[Prop]
													? Prop
													: never
												]?: InferredObject[Prop]
											}
											& {
												[
												Prop in keyof InferredObject as
												undefined extends InferredObject[Prop]
													? never
													: Prop
												]: InferredObject[Prop]
											}
										)
										: never
								> extends infer InferredResult
									// priority to opaque type
									? IsEqual<InferredResult, inferredInput> extends true
										? inferredInput
										: InferredResult
									: never
						: never
			: never
	)
	| (
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
	)
);

export type ComplexUnMatchedValue<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = UnionToTuple<keyof GetIncompleteUnion<GenericInput, GenericPatternValue>>["length"] extends 0 | 1
	? ComputeComplexUnMatchedValue<GenericInput, GenericPatternValue>
	: GenericInput;
