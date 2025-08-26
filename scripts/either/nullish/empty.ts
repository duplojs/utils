import { createEitherLeft, type EitherLeft, isEitherLeft } from "../left";
import { type EitherRight, isEitherRight } from "../right";
import { createEitherNullish } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export type NullishValue = null | undefined;

export interface EitherNullishEmpty<
	GenericValue extends NullishValue = NullishValue,
>extends EitherLeft<"nullish", GenericValue>,
	Kind<"either-nullish">,
	Kind<"either-empty"> {

}

export function createEitherNullishEmpty<
	GenericValue extends NullishValue = undefined,
>(value: GenericValue = undefined as GenericValue): EitherNullishEmpty<GenericValue> {
	return {
		"kind-either-empty": null,
		"kind-either-nullish": null,
		...createEitherLeft("nullish", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isEitherNullishEmpty(
	either: unknown,
): either is EitherNullishEmpty {
	return isEitherLeft(either)
		&& hasKind(either, "either-nullish")
		&& hasKind(either, "either-empty");
}

type ToEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherNullish<GenericValue>>;

export function whenEitherIsNullishEmpty<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishEmpty
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
export function whenEitherIsNullishEmpty<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishEmpty
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
export function whenEitherIsNullishEmpty(...args: [AnyValue, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenEitherIsNullishEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isEitherRight(input)) {
		return input as never;
	} else if (!isEitherNullishEmpty(input) && isEitherLeft(input)) {
		return input as never;
	}

	const either = isEitherRight(input) || isEitherLeft(input)
		? input
		: createEitherNullish(input);

	if (isEitherNullishEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
