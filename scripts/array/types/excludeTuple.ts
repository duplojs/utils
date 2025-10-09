import { type LastUnionElement, type AnyTuple, type IsEqual, type IsUnion, type Or } from "@scripts/common";

export type ExcludeTuple<
	GenericValue extends unknown,
	GenericArray extends readonly any[],
> = Or<[
	IsEqual<GenericValue, never>,
	IsEqual<GenericArray, never>,
]> extends true
	? GenericValue
	: IsUnion<GenericArray> extends true
		? LastUnionElement<GenericArray> extends infer InferredArray extends readonly any[]
			? ExcludeTuple<GenericValue, InferredArray> extends infer InferredResult
				? IsEqual<InferredResult, never> extends true
					? never
					: ExcludeTuple<
						InferredResult,
						Exclude<GenericArray, InferredArray>
					>
				: never
			: never
		: GenericValue extends readonly any[]
			? (
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
								? never
								: InferredValue
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
								? InferredValueFirst extends InferredArrayFirst
									? InferredArrayRest extends readonly []
										? never
										: InferredValueRest extends readonly []
											? InferredValue
											: ExcludeTuple<
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
									: InferredValue
								: never
						: never
				)
			)
			: GenericValue;
