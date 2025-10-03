import { type Adaptor, type IsEqual } from "@scripts/common";
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
			Exclude<Extract<GenericInput, object>, GenericPatternValue | readonly any[]>,
			Exclude<Extract<GenericPatternValue, object>, readonly any[]>,
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
	| (
		[
			Extract<GenericInput, readonly any[]>,
			Extract<GenericPatternValue, readonly any[]>,
		] extends [
			infer inferredInput,
			infer inferredPatternValue,
		]
			? IsEqual<inferredPatternValue, never> extends true
				? never
				: {}
			: never
	)
);
