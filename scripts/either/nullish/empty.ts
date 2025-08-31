import { createLeft, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { createNullish } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export type NullishValue = null | undefined;

export interface EitherNullishEmpty<
	GenericValue extends NullishValue = NullishValue,
>extends EitherLeft<"nullish", GenericValue>,
	Kind<"either-nullish">,
	Kind<"either-empty"> {

}

export function createNullishEmpty<
	const GenericValue extends NullishValue = undefined,
>(value: GenericValue = undefined as GenericValue): EitherNullishEmpty<GenericValue> {
	return {
		"kind-either-empty": null,
		"kind-either-nullish": null,
		...createLeft("nullish", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isNullishEmpty(
	either: unknown,
): either is EitherNullishEmpty {
	return isLeft(either)
		&& hasKind(either, "either-nullish")
		&& hasKind(either, "either-empty");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createNullish<GenericValue>>;

export function whenIsNullishEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishEmpty
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
export function whenIsNullishEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishEmpty
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
export function whenIsNullishEmpty(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsNullishEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return input as never;
	} else if (!isNullishEmpty(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: createNullish(input);

	if (isNullishEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
