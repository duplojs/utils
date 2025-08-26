import { createEitherRight, type EitherRight, isEitherRight } from "../right";
import { type EitherLeft, isEitherLeft } from "../left";
import { createEitherNullish } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface EitherNullishFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"nullish", GenericValue>,
	Kind<"either-nullish">,
	Kind<"either-filled"> {

}

export function createEitherNullishFilled<
	GenericValue extends AnyValue,
>(value: GenericValue): EitherNullishFilled<GenericValue> {
	return {
		"kind-either-filled": null,
		"kind-either-nullish": null,
		...createEitherRight("nullish", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isEitherNullishFilled(
	either: unknown,
): either is EitherNullishFilled {
	return isEitherRight(either)
		&& hasKind(either, "either-nullish")
		&& hasKind(either, "either-filled");
}

type ToEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherNullish<GenericValue>>;

export function whenEitherIsNullishFilled<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishFilled
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
export function whenEitherIsNullishFilled<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishFilled
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
export function whenEitherIsNullishFilled(...args: [AnyValue, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenEitherIsNullishFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;
	if (isEitherLeft(input)) {
		return input as never;
	} else if (!isEitherNullishFilled(input) && isEitherRight(input)) {
		return input as never;
	}

	const either = isEitherRight(input) || isEitherLeft(input)
		? input
		: createEitherNullish(input);

	if (isEitherNullishFilled(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
