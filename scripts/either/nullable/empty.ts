import { hasKind, type Kind } from "@scripts/common/kind";
import { createLeft, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { createNullable } from "./create";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type AnyValue } from "@scripts/common";

export interface EitherNullableEmpty
	extends EitherLeft<"nullable", null>,
	Kind<"either-nullable">,
	Kind<"either-empty"> {

}

export function createNullableEmpty(): EitherNullableEmpty {
	return {
		"kind-either-empty": null,
		"kind-either-nullable": null,
		...createLeft("nullable", null),
	};
}

type Either = EitherRight | EitherLeft;

export function isNullableEmpty(
	either: unknown,
): either is EitherNullableEmpty {
	return isLeft(either)
		&& hasKind(either, "either-nullable")
		&& hasKind(either, "either-empty");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createNullable<GenericValue>>;

export function whenIsNullableEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableEmpty
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
export function whenIsNullableEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableEmpty
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
export function whenIsNullableEmpty(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsNullableEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return input as never;
	} else if (!isNullableEmpty(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: createNullable(input);

	if (isNullableEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
