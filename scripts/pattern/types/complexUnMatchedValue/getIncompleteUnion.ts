import { type AnyTuple, type Adaptor, type IsEqual, type Or } from "@scripts/common";
import { type PatternValueMaybeAll, type EligiblePrimitiveMatch } from "../pattern";
import { type FlatObject } from "@scripts/object";
import { type ExcludeTuple } from "@scripts/array/types/excludeTuple";

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
			? IsEqual<InferredPatternValue, never> extends true
				? never
				: IsEqual<Exclude<InferredInput, InferredPatternValue>, never> extends true
					? {}
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
					? FlatObject<{
						[Prop in (InferredPatternValue extends any ? keyof InferredPatternValue : never)]:
						GetIncompleteUnion<
							InferredInput[Adaptor<Prop, keyof InferredInput>],
							Extract<InferredPatternValue, { [SubProp in Prop]: any }>[Prop]
						>
					}>
					: IsEqual<InferredInput, never> extends true
						? {}
						: {
							"@duplojs/utils/{object}": true;
						}
			: never
	)
	| (
		[
			ExcludeTuple<
				Extract<GenericInput, AnyTuple>,
				Extract<GenericPatternValue, readonly any[]>
			>,
			Extract<GenericPatternValue, AnyTuple | readonly []>,
		] extends [
			infer InferredInput,
			infer InferredPatternValue,
		]
			? IsEqual<InferredPatternValue, never> extends true
				? never
				: IsEqual<
					InferredInput,
					Extract<GenericInput, AnyTuple>
				> extends true
					? [
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
								"@duplojs/utils/[tuple.first": InferredResultFirst;
								"@duplojs/utils/tuple.rest]": GetIncompleteUnion<
									InferredInputRest,
									InferredPatternValueRest
								>;
							}>
							: never
						: never
					: IsEqual<InferredInput, never> extends true
						? {}
						: {
							"@duplojs/utils/[tuple]": true;
						}
			: never
	)
	| (
		[
			Exclude<Extract<GenericInput, readonly any[]>, AnyTuple>,
			Extract<GenericPatternValue, AnyTuple>,
		] extends [
			infer InferredInput extends readonly any[],
			infer InferredPatternValue,
		]
			? Or<[
				IsEqual<InferredPatternValue, never>,
				IsEqual<InferredInput, never>,
			]> extends true
				? never
				: InferredPatternValue extends readonly [
					infer InferredPatternValueFirst,
					...infer InferredPatternValueRest,
				]
					? GetIncompleteUnion<
						InferredInput[number],
						InferredPatternValueFirst
					> extends infer InferredResultFirst
						? FlatObject<{
							"@duplojs/utils/[array.first": InferredResultFirst;
							"@duplojs/utils/array.rest]": IsEqual<InferredResultFirst, {}> extends true
								? GetIncompleteUnion<
									InferredInput,
									InferredPatternValueRest
								>
								: never;
						}>
						: {}
					: {}
			: never
	)
	| (
		Extract<
			GenericPatternValue,
			PatternValueMaybeAll
		> extends infer InferredPatternValue
			? IsEqual<InferredPatternValue, never> extends true
				? never
				: { "@duplojs/utils/{maybeAll}": true }
			: never
	)
	| (
		[
			Extract<GenericInput, readonly any[]>,
			Extract<GenericPatternValue, readonly []>,
		] extends [
			infer InferredInput extends readonly any[],
			infer InferredPatternValue,
		]
			? Or<[
				IsEqual<InferredPatternValue, never>,
				IsEqual<InferredInput, never>,
			]> extends true
				? never
				: {}
			: never
	)
);
