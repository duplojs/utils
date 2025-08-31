import { createRight, type EitherRight, isRight } from "../right";
import { type EitherLeft, isLeft } from "../left";
import { createNullish } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface EitherNullishFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"nullish", GenericValue>,
	Kind<"either-nullish">,
	Kind<"either-filled"> {

}

export function createNullishFilled<
	const GenericValue extends unknown,
>(value: GenericValue): EitherNullishFilled<GenericValue> {
	return {
		"kind-either-filled": null,
		"kind-either-nullish": null,
		...createRight("nullish", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isNullishFilled(
	either: unknown,
): either is EitherNullishFilled {
	return isRight(either)
		&& hasKind(either, "either-nullish")
		&& hasKind(either, "either-filled");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createNullish<GenericValue>>;

export function whenIsNullishFilled<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishFilled
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
export function whenIsNullishFilled<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishFilled
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
export function whenIsNullishFilled(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsNullishFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;
	if (isLeft(input)) {
		return input as never;
	} else if (!isNullishFilled(input) && isRight(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: createNullish(input);

	if (isNullishFilled(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
