import { createLeft, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { createOptional } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface EitherOptionalEmpty
	extends EitherLeft<"optional", undefined>,
	Kind<"either-optional">,
	Kind<"either-empty"> {

}

export function createOptionalEmpty(): EitherOptionalEmpty {
	return {
		"kind-either-empty": null,
		"kind-either-optional": null,
		...createLeft("optional", undefined),
	};
}

type Either = EitherRight | EitherLeft;

export function isOptionalEmpty(
	either: unknown,
): either is EitherOptionalEmpty {
	return isLeft(either)
		&& hasKind(either, "either-optional")
		&& hasKind(either, "either-empty");
}

type ToOptionalEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createOptional<GenericValue>>;

export function whenIsOptionalEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherOptionalEmpty
		>["value"]
	) => GenericOutput,
): (input: GenericInput,) => GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalEmpty>;
export function whenIsOptionalEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
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
export function whenIsOptionalEmpty(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsOptionalEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return input as never;
	} else if (!isOptionalEmpty(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: createOptional(input);

	if (isOptionalEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
