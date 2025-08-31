import { createRight, type EitherRight, isRight } from "../right";
import { createOptional } from "./create";
import { type EitherLeft, isLeft } from "../left";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type AnyValue } from "@scripts/common";

export interface EitherOptionalFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"optional", GenericValue>,
	Kind<"either-optional">,
	Kind<"either-filled"> {

}

export function createOptionalFilled<
	const GenericValue extends unknown,
>(value: GenericValue): EitherOptionalFilled<GenericValue> {
	return {
		"kind-either-filled": null,
		"kind-either-optional": null,
		...createRight("optional", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isOptionalFilled(
	either: unknown,
): either is EitherOptionalFilled {
	return isRight(either)
		&& hasKind(either, "either-optional")
		&& hasKind(either, "either-filled");
}

type ToOptionalEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createOptional<GenericValue>>;

export function whenIsOptionalFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue,
>(
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherOptionalFilled
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalFilled>;
export function whenIsOptionalFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherOptionalFilled
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalFilled>;
export function whenIsOptionalFilled(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsOptionalFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isLeft(input)) {
		return input as never;
	} else if (!isOptionalFilled(input) && isRight(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: createOptional(input);

	if (isOptionalFilled(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
