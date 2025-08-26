import { createEitherRight, type EitherRight, isEitherRight } from "../right";
import { createEitherOptional } from "./create";
import { type EitherLeft, isEitherLeft } from "../left";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface EitherOptionalFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"optional", GenericValue>,
	Kind<"either-optional">,
	Kind<"either-filled"> {

}

export function createEitherOptionalFilled<
	GenericValue extends AnyValue,
>(value: GenericValue): EitherOptionalFilled<GenericValue> {
	return {
		"kind-either-filled": null,
		"kind-either-optional": null,
		...createEitherRight("optional", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isEitherOptionalFilled(
	either: unknown,
): either is EitherOptionalFilled {
	return isEitherRight(either)
		&& hasKind(either, "either-optional")
		&& hasKind(either, "either-filled");
}

type ToOptionalEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherOptional<GenericValue>>;

export function whenEitherIsOptionalFilled<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherOptionalFilled
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalFilled>;
export function whenEitherIsOptionalFilled<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherOptionalFilled
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalFilled>;
export function whenEitherIsOptionalFilled(...args: [AnyValue, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenEitherIsOptionalFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isEitherLeft(input)) {
		return input as never;
	} else if (!isEitherOptionalFilled(input) && isEitherRight(input)) {
		return input as never;
	}

	const either = isEitherRight(input) || isEitherLeft(input)
		? input
		: createEitherOptional(input);

	if (isEitherOptionalFilled(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
