import { createEitherLeft, type EitherLeft, isEitherLeft } from "../left";
import { type EitherRight, isEitherRight } from "../right";
import { createEitherOptional } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface EitherOptionalEmpty
	extends EitherLeft<"optional", undefined>,
	Kind<"either-optional">,
	Kind<"either-empty"> {

}

export function createEitherOptionalEmpty(): EitherOptionalEmpty {
	return {
		"kind-either-empty": null,
		"kind-either-optional": null,
		...createEitherLeft("optional", undefined),
	};
}

type Either = EitherRight | EitherLeft;

export function isEitherOptionalEmpty(
	either: unknown,
): either is EitherOptionalEmpty {
	return isEitherLeft(either)
		&& hasKind(either, "either-optional")
		&& hasKind(either, "either-empty");
}

type ToOptionalEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherOptional<GenericValue>>;

export function whenEitherIsOptionalEmpty<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherOptionalEmpty
		>["value"]
	) => GenericOutput,
): (input: GenericInput,) => GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalEmpty>;
export function whenEitherIsOptionalEmpty<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherOptionalEmpty
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToOptionalEither<GenericInput>, EitherOptionalEmpty>;
export function whenEitherIsOptionalEmpty(...args: [AnyValue, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenEitherIsOptionalEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isEitherRight(input)) {
		return input as never;
	} else if (!isEitherOptionalEmpty(input) && isEitherLeft(input)) {
		return input as never;
	}

	const either = isEitherRight(input) || isEitherLeft(input)
		? input
		: createEitherOptional(input);

	if (isEitherOptionalEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
