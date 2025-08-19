import { createEitherLeft, type EitherLeft, unknownIsEitherLeft } from "../left";
import { type EitherNullishFilled } from "./filled";
import { type EitherRight, unknownIsEitherRight } from "../right";
import { createEitherNullish } from "./create";
import { hasKind, type TheKind } from "@scripts/common/theKind";
import { type AnyValue } from "@scripts/common/types/AnyValue";

export type NullishValue = null | undefined;

export interface EitherNullishEmpty<
	GenericValue extends NullishValue = NullishValue,
>extends EitherLeft<"nullish", GenericValue>,
	TheKind<"either-nullish">,
	TheKind<"either-empty"> {

}

export function createEitherNullishEmpty<
	GenericValue extends NullishValue,
>(value: GenericValue): EitherNullishEmpty<GenericValue> {
	return {
		"kind-either-empty": null,
		"kind-either-nullish": null,
		...createEitherLeft("nullish", value),
	};
}

type Either = EitherRight | EitherLeft;

type NullishEither = EitherNullishFilled | EitherNullishEmpty;

export function isEitherNullishEmpty<
	GenericEither extends NullishEither,
>(
	either: GenericEither,
): either is Extract<GenericEither, EitherNullishEmpty> {
	return unknownIsEitherLeft(either)
		&& hasKind(either, "either-nullish")
		&& hasKind(either, "either-empty");
}

export function unknownIsEitherNullishEmpty(
	either: unknown,
): either is EitherNullishEmpty {
	return unknownIsEitherLeft(either)
		&& hasKind(either, "either-nullish")
		&& hasKind(either, "either-empty");
}

type ToNullishEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherNullish<GenericValue>>;

export function whenEitherIsNullishEmpty<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToNullishEither<GenericInput>,
			EitherNullishEmpty
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToNullishEither<GenericInput>, EitherNullishEmpty> {
	if (unknownIsEitherRight(input)) {
		return input as never;
	} else if (!unknownIsEitherNullishEmpty(input) && unknownIsEitherLeft(input)) {
		return input as never;
	}

	const either = unknownIsEitherRight(input) || unknownIsEitherLeft(input)
		? input
		: createEitherNullish(input);

	if (unknownIsEitherNullishEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
