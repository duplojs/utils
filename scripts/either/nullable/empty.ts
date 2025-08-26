import { hasKind, type Kind } from "@scripts/common/kind";
import { createEitherLeft, type EitherLeft, isEitherLeft } from "../left";
import { type EitherRight, isEitherRight } from "../right";
import { createEitherNullable } from "./create";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface EitherNullableEmpty
	extends EitherLeft<"nullable", null>,
	Kind<"either-nullable">,
	Kind<"either-empty"> {

}

export function createEitherNullableEmpty(): EitherNullableEmpty {
	return {
		"kind-either-empty": null,
		"kind-either-nullable": null,
		...createEitherLeft("nullable", null),
	};
}

type Either = EitherRight | EitherLeft;

export function isEitherNullableEmpty(
	either: unknown,
): either is EitherNullableEmpty {
	return isEitherLeft(either)
		&& hasKind(either, "either-nullable")
		&& hasKind(either, "either-empty");
}

type ToEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherNullable<GenericValue>>;

export function whenEitherIsNullableEmpty<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableEmpty
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
export function whenEitherIsNullableEmpty<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableEmpty
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
export function whenEitherIsNullableEmpty(...args: [AnyValue, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenEitherIsNullableEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isEitherRight(input)) {
		return input as never;
	} else if (!isEitherNullableEmpty(input) && isEitherLeft(input)) {
		return input as never;
	}

	const either = isEitherRight(input) || isEitherLeft(input)
		? input
		: createEitherNullable(input);

	if (isEitherNullableEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
