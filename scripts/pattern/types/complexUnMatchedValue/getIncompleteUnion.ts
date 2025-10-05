import { type AnyTuple, type Adaptor, type IsEqual } from "@scripts/common";
import { type EligiblePrimitiveMatch } from "../pattern";
import { type FlatObject } from "@scripts/object/types/flatObject";
import { type GetPropsWithValue } from "@scripts/object";

export type GetIncompleteUnion<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
	| (
		[
			Extract<GenericInput, EligiblePrimitiveMatch>,
			Extract<GenericPatternValue, EligiblePrimitiveMatch>,
		] extends [
			infer InferredInput,
			infer InferredPatternValue,
		]
			? IsEqual<Exclude<InferredInput, InferredPatternValue>, never> extends true
				? never
				: true
			: never
	)
	| (
		[
			Exclude<Extract<GenericInput, object>, GenericPatternValue | readonly any[]>,
			Exclude<Extract<GenericPatternValue, object>, readonly any[]>,
		] extends [
			infer InferredInput,
			infer InferredPatternValue,
		]
			? IsEqual<InferredPatternValue, never> extends true
				? never
				: IsEqual<
					InferredInput,
					Exclude<Extract<GenericInput, object>, readonly any[]>
				> extends true
					? {
						[Prop in (InferredPatternValue extends any ? keyof InferredPatternValue : never)]:
						GetIncompleteUnion<
							InferredInput[Adaptor<Prop, keyof InferredInput>],
							InferredPatternValue[Prop]
						>
					} extends infer InferredResult extends object
						? FlatObject<
							Omit<InferredResult, GetPropsWithValue<InferredResult, never>>
						>
						: never
					: IsEqual<InferredInput, never> extends true
						? {}
						: {
							"{object}": true;
						}
			: never
	)
	| (
		[
			Extract<GenericInput, AnyTuple>,
			Extract<GenericPatternValue, AnyTuple>,
		] extends [
			infer InferredInput,
			infer InferredPatternValue,
		]
			? IsEqual<InferredPatternValue, never> extends true
				? never
				: [
					InferredInput,
					InferredPatternValue,
				] extends [
					readonly [infer InferredInputFirst, ...infer InferredInputRest],
					readonly [infer InferredPatternValueFirst, ...infer InferredPatternValueRest],
				]
					? GetIncompleteUnion<
						InferredInputFirst,
						InferredPatternValueFirst
					> extends infer InferredResultFirst
						? FlatObject<{
							"[first": InferredResultFirst;
							"rest]": GetIncompleteUnion<
								InferredInputRest,
								InferredPatternValueRest
							>;
						}>
						: never
					: never
			: never
	)
	| (
		[
			Exclude<Extract<GenericInput, readonly any[]>, AnyTuple>,
			Extract<GenericPatternValue, AnyTuple>,
		] extends [
			infer _inferredInput,
			infer inferredPatternValue,
		]
			? IsEqual<inferredPatternValue, never> extends true
				? never
				: never
			: never
	)
);
