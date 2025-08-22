import { createEitherRight, type EitherRight, isEitherRight, unknownIsEitherRight } from "../right";
import { type EitherNullishEmpty } from "./empty";
import { type EitherLeft, unknownIsEitherLeft } from "../left";
import { createEitherNullish } from "./create";
import { hasKind, type TheKind } from "@scripts/common/theKind";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherNullishFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"nullish", GenericValue>,
	TheKind<"either-nullish">,
	TheKind<"either-filled"> {

}

export function createEitherNullishFilled<
	GenericValue extends AnyValue,
>(value: GenericValue): EitherNullishFilled<GenericValue> {
	return {
		"kind-either-filled": null,
		"kind-either-nullish": null,
		...createEitherRight("nullish", value),
	};
}

type Either = EitherRight | EitherLeft;

type NullishEither = EitherNullishFilled | EitherNullishEmpty;

export function isEitherNullishFilled<
	GenericEither extends NullishEither,
>(
	either: GenericEither,
): either is Extract<GenericEither, EitherNullishFilled> {
	return isEitherRight(either)
		&& hasKind(either, "either-nullish")
		&& hasKind(either, "either-filled");
}

export function unknownIsEitherNullishFilled(
	either: unknown,
): either is EitherNullishFilled {
	return unknownIsEitherRight(either)
		&& hasKind(either, "either-nullish")
		&& hasKind(either, "either-filled");
}

type ToNullishEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherNullish<GenericValue>>;

export function whenEitherIsNullishFilled<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToNullishEither<GenericInput>,
			EitherNullishFilled
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToNullishEither<GenericInput>, EitherNullishFilled> {
	if (unknownIsEitherLeft(input)) {
		return input as never;
	} else if (!unknownIsEitherNullishFilled(input) && unknownIsEitherRight(input)) {
		return input as never;
	}

	const either = unknownIsEitherRight(input) || unknownIsEitherLeft(input)
		? input
		: createEitherNullish(input);

	if (unknownIsEitherNullishFilled(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
