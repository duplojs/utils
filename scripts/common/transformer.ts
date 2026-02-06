import type { GetPropsWithValueExtends } from "@scripts/object/types";
import type { Adaptor, AnyFunction, IsEqual, NeverCoalescing, Or, UnionToIntersection } from "./types";

export type Transformer<
	GenericValue extends unknown,
	GenericMethodName extends string,
> = GenericValue extends Record<GenericMethodName, () => unknown>
	? ReturnType<GenericValue[GenericMethodName]>
	: GenericValue extends readonly [infer InferredFirst, ...infer InferredRest]
		? [
			Transformer<InferredFirst, GenericMethodName>,
			...Adaptor<Transformer<InferredRest, GenericMethodName>, readonly any[]>,
		]
		: GenericValue extends readonly []
			? []
			: GenericValue extends readonly any[]
				? Transformer<GenericValue[number], GenericMethodName>[]
				: GenericValue extends string
					? GenericValue
					: GenericValue extends Record<number, unknown>
						? {
							[Prop in keyof GenericValue]: Transformer<GenericValue[Prop], GenericMethodName>
						}
						: GenericValue;

declare const SymbolTransformError: unique symbol;
export type CheckTransformArgument<
	GenericValue extends unknown,
	GenericMethodName extends string = string,
> = NeverCoalescing<
	GenericValue extends any
		?
		(
			Or<[
				IsEqual<GenericValue, unknown>,
				IsEqual<GenericValue, never>,
				IsEqual<GenericValue, object>,
				IsEqual<GenericValue, any>,
				IsEqual<GenericMethodName, string>,
			]> extends true
				? { [SymbolTransformError]: "Input contain an indeterminate value." }
				: GenericValue extends Record<GenericMethodName, () => unknown>
					? unknown
					: GenericValue extends Record<GenericMethodName, AnyFunction>
						? { [SymbolTransformError]: `A method ${GenericMethodName} in input have an argument.` }
						: GenericValue extends readonly [infer InferredFirst, ...infer InferredRest]
							? (
								& CheckTransformArgument<InferredFirst, GenericMethodName>
								& CheckTransformArgument<InferredRest, GenericMethodName>
							)
							: GenericValue extends readonly []
								? unknown
								: GenericValue extends string
									? unknown
									: GenericValue extends readonly (infer InferredValue)[]
										? CheckTransformArgument<InferredValue, GenericMethodName>
										: GenericValue extends Record<number, unknown>
											? {
												[Prop in keyof GenericValue]: CheckTransformArgument<
													GenericValue[Prop],
													GenericMethodName
												>
											} extends infer InferredResult extends object
												? UnionToIntersection<
													NeverCoalescing<
														InferredResult[
															GetPropsWithValueExtends<
																InferredResult,
															object
															>
														],
														unknown
													>
												>
												: never
											: unknown
		) extends infer InferredResult
			? IsEqual<InferredResult, unknown> extends true
				? never
				: InferredResult
			: never
		: never,
	unknown
>;

export function transformer<
	GenericInput extends unknown,
	GenericMethodName extends string,
>(
	input: GenericInput & CheckTransformArgument<GenericInput, GenericMethodName>,
	methodName: GenericMethodName,
): Transformer<GenericInput, GenericMethodName> {
	if (
		input
		&& typeof input === "object"
		&& methodName in input
		&& typeof input[methodName as never] === "function"
	) {
		return (input[methodName as never] as AnyFunction)();
	} else if (
		typeof input === "object"
		&& input !== null
		&& (
			!input.constructor
			|| input.constructor.name === "Object"
		)
	) {
		const result: Record<string, unknown> = {};

		for (const key in input) {
			result[key as string] = transformer(input[key as never], methodName);
		}

		return result as never;
	} else if (
		input instanceof Array
		&& input.constructor.name === "Array"
	) {
		const length = input.length;
		const result = [];
		for (let index = 0; index < length; index++) {
			result[index] = transformer(input[index], methodName);
		}

		return result as never;
	} else {
		return input as never;
	}
}

export type TransformerFunction<
	GenericMethodName extends string = string,
> = <
	GenericInput extends unknown,
>(input: GenericInput) => Transformer<
	GenericInput,
	GenericMethodName
>;

/**
 * {@include common/createTransformer/index.md}
 */
export function createTransformer<
	GenericMethodName extends string,
>(
	methodName: GenericMethodName,
): TransformerFunction<GenericMethodName> {
	return (input) => transformer(input as never, methodName);
}

export const toNative = createTransformer("toNative");
export const toJSON = createTransformer("toJSON");
