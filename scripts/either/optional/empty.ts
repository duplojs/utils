import { createEitherLeft, type EitherLeft, unknownIsEitherLeft } from "../left";
import { type EitherOptionalFilled } from "./filled";
import { type EitherRight, isEitherRight, unknownIsEitherRight } from "../right";
import { createEitherOptional } from "./create";
import { hasKind, type TheKind } from "@scripts/common/theKind";
import { type AnyValue } from "@scripts/common/types/AnyValue";

export interface EitherOptionalEmpty
	extends EitherLeft<"optional", undefined>,
	TheKind<"either-optional">,
	TheKind<"either-empty"> {

}

export function createEitherOptionalEmpty(): EitherOptionalEmpty {
	return {
		"kind-either-empty": null,
		"kind-either-optional": null,
		...createEitherLeft("optional", undefined),
	};
}

type Either = EitherRight | EitherLeft;

type OptionalEither = EitherOptionalFilled | EitherOptionalEmpty;

export function isEitherOptionalEmpty<
	GenericEither extends OptionalEither,
>(
	either: GenericEither,
): either is Extract<GenericEither, EitherOptionalEmpty> {
	return isEitherRight(either)
		&& hasKind(either, "either-optional")
		&& hasKind(either, "either-empty");
}

export function unknownIsEitherOptionalEmpty(
	either: unknown,
): either is EitherOptionalEmpty {
	return unknownIsEitherRight(either)
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
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherOptionalEmpty
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToOptionalEither<GenericInput>, EitherOptionalEmpty> {
	if (unknownIsEitherRight(input)) {
		return input as never;
	} else if (!unknownIsEitherOptionalEmpty(input) && unknownIsEitherLeft(input)) {
		return input as never;
	}

	const either = unknownIsEitherRight(input) || unknownIsEitherLeft(input)
		? input
		: createEitherOptional(input);

	if (unknownIsEitherOptionalEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
