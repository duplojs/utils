import { type MergeUnionTuple } from "@scripts/array/types/mergeUnionTuple";
import { type AnyTuple, type Adaptor, type IsEqual, type ObjectKey, type WrappedValue } from "@scripts/common";

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
			readonly [Prop in InferredInputKeyofObject]?: Extract<
				InferredInputObject,
				Partial<Record<Prop, any>>
			> extends infer InferredValue extends object
				? Prop extends keyof InferredValue
					? Pattern<InferredValue[Prop]>
					: never
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
> = (
	| (
		Extract<GenericInput, AnyTuple> extends infer InferredInput extends AnyTuple
			? IsEqual<InferredInput, never> extends true
				? never
				: MergeUnionTuple<InferredInput> extends readonly [infer InferredFirst, ...infer InferredRest]
					? (
						| readonly []
						| readonly [Pattern<InferredFirst>]
						| (
							InferredRest extends readonly []
								? never
								: readonly [
									Pattern<InferredFirst>,
									...Adaptor<
										Pattern<InferredRest>,
										readonly any[]
									>,
								]
						)
					)
					: never
			: never
	)
	| (
		Exclude<
			Extract<GenericInput, readonly any[]>,
			AnyTuple
		> extends infer InferredInput extends readonly any[]
			? IsEqual<InferredInput, never> extends true
				? never
				: readonly Pattern<InferredInput[number]>[]
			: never
	)
);

type PredicatePattern<
	GenericInput extends unknown = any,
> = (input: GenericInput) => boolean;

const SymbolToolPattern = Symbol.for("SymbolToolPatternLabel");
type SymbolToolPattern = typeof SymbolToolPattern;

export const SymbolToolPatternFunctionLabel = "SymbolToolPatternFunctionLabel";
const SymbolToolPatternFunction = Symbol.for(SymbolToolPatternFunctionLabel);
type SymbolToolPatternFunction = typeof SymbolToolPatternFunction;

export interface ToolPattern<
	GenericInput extends unknown = any,
	GenericPattern extends unknown = any,
> {
	[SymbolToolPatternFunction](input: GenericInput): boolean;
	[SymbolToolPattern]: GenericPattern;
}

export type Pattern<
	GenericInput extends unknown = any,
> = (
	| PredicatePattern<GenericInput>
	| ToolPattern<GenericInput>
	| PrimitivePattern<GenericInput>
	| ObjectPattern<GenericInput>
	| ArrayPattern<GenericInput>
);

const SymbolPatternValueMaybeAll = Symbol.for("SymbolMaybeAll");
type SymbolPatternValueMaybeAll = typeof SymbolPatternValueMaybeAll;

export interface PatternValueMaybeAll<
	GenericValue extends unknown = any,
> extends WrappedValue<GenericValue> {
	[SymbolPatternValueMaybeAll]: unknown;
}

export type PatternValue<
	GenericPattern extends Pattern,
> = GenericPattern extends EligiblePrimitiveMatch
	? GenericPattern
	: GenericPattern extends (input: any) => input is infer InferredPredicate
		? InferredPredicate
		: GenericPattern extends (input: infer InferredInput) => boolean
			? PatternValueMaybeAll<InferredInput>
			: GenericPattern extends ToolPattern<any, infer InferredPattern>
				? PatternValue<InferredPattern>
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
