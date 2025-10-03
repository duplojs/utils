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
								ComplexMatchedValue<
									InferredInput[number],
									InferredPatternFirst
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
							? ComplexMatchedValue<
								InferredInputFirst,
								InferredPatternValueFirst
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

export type ComplexMatchedArray<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = GenericPatternValue extends readonly []
	? BreakGenericLink<GenericInput>
	: (
		| ComplexMatchedTupleTuple<GenericInput, GenericPatternValue>
		| ComplexMatchedArrayTuple<GenericInput, GenericPatternValue>
	);
