import { createEitherRight, type EitherRight, isEitherRight, unknownIsEitherRight } from "../right";
import { createEitherNullable } from "./create";
import { type EitherLeft, unknownIsEitherLeft } from "../left";
import { type EitherNullableEmpty } from "./empty";
import { hasKind, type TheKind } from "@scripts/common/theKind";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherNullableFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"nullable", GenericValue>,
	TheKind<"either-nullable">,
	TheKind<"either-filled"> {

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

type NullableEither = EitherNullableFilled | EitherNullableEmpty;

export function isEitherNullableFilled<
	GenericEither extends NullableEither,
>(
	either: GenericEither,
): either is Extract<GenericEither, EitherNullableFilled> {
	return isEitherRight(either)
		&& hasKind(either, "either-nullable")
		&& hasKind(either, "either-filled");
}

export function unknownIsEitherNullableFilled(
	either: unknown,
): either is EitherNullableFilled {
	return unknownIsEitherRight(either)
		&& hasKind(either, "either-nullable")
		&& hasKind(either, "either-filled");
}

type ToNullableEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherNullable<GenericValue>>;

export function whenEitherIsNullableFilled<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToNullableEither<GenericInput>,
			EitherNullableFilled
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToNullableEither<GenericInput>, EitherNullableFilled> {
	if (unknownIsEitherLeft(input)) {
		return input as never;
	} else if (!unknownIsEitherNullableFilled(input) && unknownIsEitherRight(input)) {
		return input as never;
	}

	const either = unknownIsEitherRight(input) || unknownIsEitherLeft(input)
		? input
		: createEitherNullable(input);

	if (unknownIsEitherNullableFilled(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
