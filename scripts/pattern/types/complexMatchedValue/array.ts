import { type BreakGenericLink, type Adaptor, type AnyTuple, type IsEqual } from "@scripts/common";
import { type ComplexMatchedValue } from ".";

type ComplexMatchedArrayTuple<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	[
		Exclude<Extract<GenericInput, any[]>, AnyTuple>,
		Extract<GenericPatternValue, AnyTuple>,
	] extends [
		infer InferredInput,
		infer InferredPatternValue,
	]
		? InferredInput extends any[]
			? InferredPatternValue extends AnyTuple
				? Extract<
					InferredInput,
					InferredPatternValue
				> extends infer InferredObviousMatchedValue
					? IsEqual<InferredObviousMatchedValue, never> extends false
						? InferredObviousMatchedValue
						: InferredPatternValue extends readonly [
							infer InferredPatternFirst,
							...infer InferredPatternRest,
						]
							? [
								Extract<
									ComplexMatchedValue<
										InferredInput[number],
										InferredPatternFirst
									>,
									any
								>,
								...(
									InferredPatternRest extends readonly []
										? InferredInput
										: Adaptor<
											ComplexMatchedValue<
												InferredInput,
												InferredPatternRest
											>,
											any[]
										>
								),
							]
							: never
					: never
				: never
			: never
		: never
);

type ComplexMatchedTupleTuple<
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
		? InferredInput extends any
			? InferredPatternValue extends any
				? Extract<
					InferredInput,
					InferredPatternValue
				> extends infer InferredObviousMatchedValue
					? IsEqual<InferredObviousMatchedValue, never> extends false
						? InferredObviousMatchedValue
						: [
							InferredInput,
							InferredPatternValue,
						] extends [
							readonly [infer InferredInputFirst, ...infer inferredInputRest],
							readonly [infer InferredPatternValueFirst, ...infer inferredPatternValueRest],
						]
							? Extract<
								ComplexMatchedValue<
									InferredInputFirst,
									InferredPatternValueFirst
								>,
								any
							> extends infer InferredResult extends InferredInputFirst
								? IsEqual<InferredResult, never> extends true
									? never
									: [
										InferredResult,
										...Adaptor<
											(
												IsEqual<inferredPatternValueRest[number], never> extends true
													? inferredInputRest
													: ComplexMatchedValue<
														inferredInputRest,
														inferredPatternValueRest
													>
											),
											readonly any[]
										>,
									]
								: never
							: never
					: never
				: never
			: never
		: never
);

type ComplexMatchedArrayArray<
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
		? IsEqual<InferredPatternValue, never> extends true
			? never
			: InferredPatternValue extends InferredInput
				? InferredInput
				: Extract<
					ComplexMatchedValue<
						InferredInput[number],
						InferredPatternValue[number]
					>,
					any
				>[]
		: never
);

export type ComplexMatchedArray<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = GenericPatternValue extends readonly []
	? BreakGenericLink<GenericInput>
	: (
		| ComplexMatchedTupleTuple<GenericInput, GenericPatternValue>
		| ComplexMatchedArrayTuple<GenericInput, GenericPatternValue>
		| ComplexMatchedArrayArray<GenericInput, GenericPatternValue>
	);
