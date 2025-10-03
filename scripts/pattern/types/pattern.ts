import { type Adaptor, type IsEqual, type ObjectKey } from "@scripts/common";

export type EligiblePrimitiveMatch = string | number | bigint | boolean | undefined | null;

type PrimitivePattern<
	GenericInput extends unknown,
> = GenericInput extends EligiblePrimitiveMatch
	? GenericInput
	: never;

type ObjectPattern<
	GenericInput extends unknown,
> = Exclude<GenericInput, readonly any[]> extends infer InferredInput
	? [
		Extract<InferredInput, object>,
		InferredInput extends object ? keyof InferredInput : never,
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
		: never
	: never;

type ArrayPattern<
	GenericInput extends unknown,
> = GenericInput extends readonly [infer inferredFirst, ...infer inferredRest]
	? (
		| readonly []
		| readonly [Pattern<inferredFirst>]
		| readonly [Pattern<inferredFirst>, ...Adaptor<Pattern<inferredRest>, readonly any[]>]
	)
	: GenericInput extends readonly any[]
		? readonly Pattern<GenericInput[number]>[]
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
	| ArrayPattern<GenericInput>
);

export type PatternValue<
	GenericPattern extends Pattern,
> = GenericPattern extends EligiblePrimitiveMatch
	? GenericPattern
	: GenericPattern extends (input: any) => input is infer InferredPredicate
		? InferredPredicate
		: GenericPattern extends (input: infer InferredInput) => boolean
			? InferredInput
			: GenericPattern extends readonly [infer inferredFirst, ...infer inferredRest]
				? IsEqual<inferredRest, readonly []> extends true
					? [PatternValue<inferredFirst>]
					: [PatternValue<inferredFirst>, ...Adaptor<PatternValue<inferredRest>, any[]>]
				: GenericPattern extends readonly []
					? []
					: GenericPattern extends readonly any[]
						? PatternValue<GenericPattern[number]>[]
						: GenericPattern extends Record<ObjectKey, Pattern>
							? {
								[Prop in keyof GenericPattern]: PatternValue<GenericPattern[Prop]>
							}
							: never;
