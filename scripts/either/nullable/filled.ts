import { createRight, type EitherRight, isRight } from "../right";
import { createNullable } from "./create";
import { type EitherLeft, isLeft } from "../left";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface EitherNullableFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"nullable", GenericValue>,
	Kind<"either-nullable">,
	Kind<"either-filled"> {

}

export function createNullableFilled<
	const GenericValue extends unknown,
>(value: GenericValue): EitherNullableFilled<GenericValue> {
	return {
		"kind-either-filled": null,
		"kind-either-nullable": null,
		...createRight("nullable", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isNullableFilled(
	either: unknown,
): either is EitherNullableFilled {
	return isRight(either)
		&& hasKind(either, "either-nullable")
		&& hasKind(either, "either-filled");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createNullable<GenericValue>>;

export function whenIsNullableFilled<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableFilled
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
export function whenIsNullableFilled<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableFilled
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
export function whenIsNullableFilled(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsNullableFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isLeft(input)) {
		return input as never;
	} else if (!isNullableFilled(input) && isRight(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: createNullable(input);

	if (isNullableFilled(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
