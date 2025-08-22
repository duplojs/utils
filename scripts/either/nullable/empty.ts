import { hasKind, type TheKind } from "@scripts/common/theKind";
import { createEitherLeft, type EitherLeft, unknownIsEitherLeft } from "../left";
import { type EitherRight, unknownIsEitherRight } from "../right";
import { createEitherNullable } from "./create";
import { type AnyValue } from "@scripts/common/types/anyValue";

export interface EitherNullableEmpty
	extends EitherLeft<"nullable", null>,
	TheKind<"either-nullable">,
	TheKind<"either-empty"> {

}

export function createEitherNullableEmpty(): EitherNullableEmpty {
	return {
		"kind-either-empty": null,
		"kind-either-nullable": null,
		...createEitherLeft("nullable", null),
	};
}

type Either = EitherRight | EitherLeft;

export function isEitherNullableEmpty(
	either: unknown,
): either is EitherNullableEmpty {
	return unknownIsEitherLeft(either)
		&& hasKind(either, "either-nullable")
		&& hasKind(either, "either-empty");
}

export function unknownIsEitherNullableEmpty(
	either: unknown,
): either is EitherNullableEmpty {
	return unknownIsEitherLeft(either)
		&& hasKind(either, "either-nullable")
		&& hasKind(either, "either-empty");
}

type ToNullableEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherNullable<GenericValue>>;

export function whenEitherIsNullableEmpty<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToNullableEither<GenericInput>,
			EitherNullableEmpty
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToNullableEither<GenericInput>, EitherNullableEmpty> {
	if (unknownIsEitherRight(input)) {
		return input as never;
	} else if (!unknownIsEitherNullableEmpty(input) && unknownIsEitherLeft(input)) {
		return input as never;
	}

	const either = unknownIsEitherRight(input) || unknownIsEitherLeft(input)
		? input
		: createEitherNullable(input);

	if (unknownIsEitherNullableEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
