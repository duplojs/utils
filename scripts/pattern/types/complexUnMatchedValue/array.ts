import { type AnyValue, type Or, type Adaptor, type AnyTuple, type IsEqual, type IsUnion } from "@scripts/common";
import { type ComplexUnMatchedValue } from ".";

type ComplexUnMatchedArrayTuple<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	[
		Exclude<Extract<GenericInput, readonly any[]>, AnyTuple>,
		Extract<GenericPatternValue, AnyTuple>,
	] extends [
		infer InferredInput,
		infer InferredPatternValue,
	]
		? IsEqual<InferredPatternValue, never> extends true
			? never
			: InferredInput
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
			? never
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
						? Extract<
							ComplexUnMatchedValue<
								InferredInputFirst,
								InferredPatternValueFirst
							>,
							any
						> extends infer InferredResultFirst
							? InferredPatternValueRest extends readonly []
								? IsEqual<InferredResultFirst, never> extends true
									? never
									: [InferredResultFirst, ...InferredInputRest]
								: ComplexUnMatchedValue<
									InferredInputRest,
									InferredPatternValueRest
								> extends infer InferredResultRest
									? IsEqual<InferredResultRest, never> extends true ?
										never
										: [
											IsEqual<InferredResultFirst, never> extends true
												? InferredInputFirst
												: InferredResultFirst,
											...Adaptor<
												IsEqual<InferredResultRest, never> extends true
													? InferredPatternValueRest
													: InferredResultRest,
												readonly any[]
											>,
										]
									: never
							: never
						: never
		: never
);

type ComplexUnMatchedArrayArray<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	[
		Exclude<Extract<GenericInput, readonly any[]>, AnyTuple>,
		Exclude<Extract<GenericPatternValue, readonly any[]>, AnyTuple>,
	] extends [
		infer InferredInput extends readonly any[],
		infer InferredPatternValue extends readonly any[],
	]
		? IsEqual<InferredInput, never> extends true
			? never
			: InferredInput[number] extends infer InferredInnerValue
				? InferredInnerValue extends any
					? Extract<
						InferredInnerValue,
						InferredPatternValue[number]
					> extends infer InferredObviousMatch
						? IsEqual<InferredObviousMatch, never> extends true
							? ComplexUnMatchedValue<
								InferredInnerValue,
								InferredPatternValue[number]
							> extends infer InferredValue
								? IsEqual<InferredValue, never> extends true
									? never
									: InferredInput
								: never
							: never
						: never
					: never
				: never
		: never
);

export type ComplexUnMatchedArray<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = Exclude<GenericPatternValue, readonly []> extends infer InferredPatternValue
	? IsEqual<InferredPatternValue, never> extends true
		? never
		: (
			| ComplexUnMatchedTupleTuple<GenericInput, InferredPatternValue>
			| ComplexUnMatchedArrayTuple<GenericInput, InferredPatternValue>
			| ComplexUnMatchedArrayArray<GenericInput, InferredPatternValue>
		)
	: never;
