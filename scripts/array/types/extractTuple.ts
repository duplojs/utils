import { type IsUnion, type Or, type AnyTuple, type IsEqual } from "@scripts/common";

export type ExtractTuple<
	GenericValue extends unknown,
	GenericArray extends readonly any[],
> = GenericValue extends readonly any[]
	? Or<[
		IsEqual<GenericValue, never>,
		IsEqual<GenericArray, never>,
	]> extends true
		? never
		: IsUnion<GenericArray> extends true
			? GenericArray extends any
				? ExtractTuple<GenericValue, GenericArray>
				: never
			: (
				| (
					[
						Extract<GenericValue, readonly any[]>,
						Exclude<Extract<GenericArray, readonly any[]>, AnyTuple>,
					] extends [
						infer InferredValue extends readonly any[],
						infer InferredArray extends readonly any[],
					]
						? Or<[
							IsEqual<InferredValue, never>,
							IsEqual<InferredArray, never>,
						]> extends true
							? never
							: InferredValue[number] extends InferredArray[number]
								? InferredValue
								: never
						: never
				)
				| (
					[
						Extract<GenericValue, AnyTuple>,
						Extract<GenericArray, AnyTuple>,
					] extends [
						infer InferredValue extends readonly any[],
						infer InferredArray extends readonly any[],
					]
						? Or<[
							IsEqual<InferredValue, never>,
							IsEqual<InferredArray, never>,
						]> extends true
							? never
							: [
								InferredValue,
								InferredArray,
							] extends [
								readonly [infer InferredValueFirst, ...infer InferredValueRest],
								readonly [infer InferredArrayFirst, ...infer InferredArrayRest],
							]
								? Extract<InferredValueFirst, any> extends InferredArrayFirst
									? InferredArrayRest extends readonly []
										? InferredValue
										: ExtractTuple<
											InferredValueRest,
											InferredArrayRest
										> extends infer InferredRestResult
											? IsEqual<
												InferredRestResult,
												never
											> extends true
												? never
												: InferredValue
											: never
									: never
								: never
						: never
				)
				| (
					[
						Extract<GenericValue, readonly any[]>,
						Extract<GenericArray, readonly []>,
					] extends [
						infer InferredValue extends readonly any[],
						infer InferredArray extends readonly any[],
					]
						? Or<[
							IsEqual<InferredValue, never>,
							IsEqual<InferredArray, never>,
						]> extends true
							? never
							: InferredValue
						: never
				)
			)
	: never;
