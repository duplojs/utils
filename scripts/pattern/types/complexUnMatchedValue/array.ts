import { type Adaptor, type AnyTuple, type IsEqual, type IsUnion } from "@scripts/common";
import { type ComputeComplexUnMatchedValue } from ".";

type ComplexUnMatchedArrayTuple<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	[
		Exclude<Extract<GenericInput, readonly any[]>, AnyTuple>,
		Extract<GenericPatternValue, AnyTuple>,
	] extends [
		infer InferredInput,
		infer _InferredPatternValue,
	]
		? InferredInput
		: never
);

type ComplexUnMatchedTupleTuple<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	[
		Extract<GenericInput, AnyTuple>,
		Extract<GenericPatternValue, AnyTuple>,
	] extends [
		infer InferredInput,
		infer InferredPatternValue,
	]
		? IsEqual<InferredPatternValue, never> extends true
			? InferredInput
			: IsUnion<InferredPatternValue> extends true
				? never
				: InferredInput extends InferredPatternValue
					? never
					: [
						InferredInput,
						InferredPatternValue,
					] extends [
						readonly [infer InferredInputFirst, ...infer InferredInputRest],
						readonly [infer InferredPatternValueFirst, ...infer InferredPatternValueRest],
					]
						? ComputeComplexUnMatchedValue<
							InferredInputFirst,
							InferredPatternValueFirst
						> extends infer InferredResultFirst
							? InferredPatternValueRest extends readonly []
								? IsEqual<InferredResultFirst, never> extends true
									? never
									: [InferredResultFirst, ...InferredInputRest]
								: ComputeComplexUnMatchedValue<
									InferredInputRest,
									InferredPatternValueRest
								> extends infer InferredResultRest
									? IsEqual<InferredResultRest, never> extends true
										? never
										: [
											IsEqual<InferredResultFirst, never> extends true
												? InferredInputFirst
												: InferredResultFirst,
											...Adaptor<
												InferredResultRest,
												readonly any[]
											>,
										]
									: never
							: never
						: never
		: never
);

export type ComplexUnMatchedArray<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = GenericPatternValue extends readonly []
	? never
	: (
		| ComplexUnMatchedTupleTuple<GenericInput, GenericPatternValue>
		| ComplexUnMatchedArrayTuple<GenericInput, GenericPatternValue>
	);
