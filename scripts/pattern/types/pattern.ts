import { type IsEqual, type ObjectKey } from "@scripts/common";

export type EligiblePrimitiveMatch = string | number | bigint | boolean | undefined | null;

type PrimitivePattern<
	GenericInput extends unknown,
> = GenericInput extends EligiblePrimitiveMatch
	? GenericInput
	: never;

type ObjectPattern<
	GenericInput extends unknown,
> = [
	Extract<GenericInput, object>,
	GenericInput extends object ? keyof GenericInput : never,
] extends [
	infer InferredInputObject extends object,
	infer InferredInputKeyofObject extends ObjectKey,
]
	? {
		[Prop in InferredInputKeyofObject]?: Extract<
			InferredInputObject,
			Partial<Record<Prop, any>>
		> extends infer InferredValue extends object
			? Extract<
				Prop extends keyof InferredValue
					? Pattern<InferredValue[Prop]>
					: never,
				any
			>
			: never
	} extends infer InferredResult
		? IsEqual<InferredResult, {}> extends true
			? never
			: InferredResult
		: never
	: never;

type PredicatePattern<
	GenericInput extends unknown = any,
> = (input: GenericInput) => boolean;

export type Pattern<
	GenericInput extends unknown = any,
> = (
	| PredicatePattern<GenericInput>
	| PrimitivePattern<GenericInput>
	| ObjectPattern<GenericInput>
);

export type PatternValue<
	GenericPattern extends Pattern,
> = GenericPattern extends EligiblePrimitiveMatch
	? GenericPattern
	: GenericPattern extends (input: any) => input is infer InferredPredicate
		? PatternValue<InferredPredicate>
		: GenericPattern extends (input: infer InferredInput) => boolean
			? PatternValue<InferredInput>
			: GenericPattern extends Record<ObjectKey, Pattern>
				? {
					[Prop in keyof GenericPattern]: PatternValue<GenericPattern[Prop]>
				}
				: never;
