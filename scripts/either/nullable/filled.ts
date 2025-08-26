import { createEitherRight, type EitherRight, isEitherRight } from "../right";
import { createEitherNullable } from "./create";
import { type EitherLeft, isEitherLeft } from "../left";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface EitherNullableFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"nullable", GenericValue>,
	Kind<"either-nullable">,
	Kind<"either-filled"> {

}

export function createEitherNullableFilled<
	GenericValue extends AnyValue,
>(value: GenericValue): EitherNullableFilled<GenericValue> {
	return {
		"kind-either-filled": null,
		"kind-either-nullable": null,
		...createEitherRight("nullable", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isEitherNullableFilled(
	either: unknown,
): either is EitherNullableFilled {
	return isEitherRight(either)
		&& hasKind(either, "either-nullable")
		&& hasKind(either, "either-filled");
}

type ToEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherNullable<GenericValue>>;

export function whenEitherIsNullableFilled<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableFilled
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
export function whenEitherIsNullableFilled<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableFilled
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
export function whenEitherIsNullableFilled(...args: [AnyValue, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenEitherIsNullableFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isEitherLeft(input)) {
		return input as never;
	} else if (!isEitherNullableFilled(input) && isEitherRight(input)) {
		return input as never;
	}

	const either = isEitherRight(input) || isEitherLeft(input)
		? input
		: createEitherNullable(input);

	if (isEitherNullableFilled(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
