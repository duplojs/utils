import { createEitherRight, type EitherRight, isEitherRight, unknownIsEitherRight } from "../right";
import { type EitherOptionalEmpty } from "./empty";
import { createEitherOptional } from "./create";
import { type EitherLeft, unknownIsEitherLeft } from "../left";
import { hasKind, type TheKind } from "@scripts/common/theKind";
import { type AnyValue } from "@scripts/common/types/AnyValue";

export interface EitherOptionalFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"optional", GenericValue>,
	TheKind<"either-optional">,
	TheKind<"either-filled"> {

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

type OptionalEither = EitherOptionalFilled | EitherOptionalEmpty;

export function isEitherOptionalFilled<
	GenericEither extends OptionalEither,
>(
	either: GenericEither,
): either is Extract<GenericEither, EitherOptionalFilled> {
	return isEitherRight(either)
		&& hasKind(either, "either-optional")
		&& hasKind(either, "either-filled");
}

export function unknownIsEitherOptionalFilled(
	either: unknown,
): either is EitherOptionalFilled {
	return unknownIsEitherRight(either)
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
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherOptionalFilled
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToOptionalEither<GenericInput>, EitherOptionalFilled> {
	if (unknownIsEitherLeft(input)) {
		return input as never;
	} else if (!unknownIsEitherOptionalFilled(input) && unknownIsEitherRight(input)) {
		return input as never;
	}

	const either = unknownIsEitherRight(input) || unknownIsEitherLeft(input)
		? input
		: createEitherOptional(input);

	if (unknownIsEitherOptionalFilled(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
