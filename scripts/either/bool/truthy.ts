import { createEitherRight, type EitherRight, isEitherRight, unknownIsEitherRight } from "../right";
import { type EitherBoolFalsy } from "./falsy";
import { createEitherBool } from "./create";
import { type EitherLeft, unknownIsEitherLeft } from "../left";
import { hasKind, type TheKind } from "@scripts/common/theKind";
import { type AnyValue } from "@scripts/common/types/AnyValue";

export interface EitherBoolTruthy<
	GenericValue extends unknown = unknown,
> extends EitherRight<"bool", GenericValue>,
	TheKind<"either-bool">,
	TheKind<"either-truthy"> {

}

export function createEitherBoolTruthy<
	GenericValue extends AnyValue,
>(value: GenericValue): EitherBoolTruthy<GenericValue> {
	return {
		"kind-either-truthy": null,
		"kind-either-bool": null,
		...createEitherRight("bool", value),
	};
}

type Either = EitherRight | EitherLeft;

type BoolEither = EitherBoolTruthy | EitherBoolFalsy;

export function isEitherBoolTruthy<
	GenericEither extends BoolEither,
>(
	either: GenericEither,
): either is Extract<GenericEither, EitherBoolTruthy> {
	return isEitherRight(either)
		&& hasKind(either, "either-bool")
		&& hasKind(either, "either-truthy");
}

export function unknownIsEitherBoolTruthy(
	either: unknown,
): either is EitherBoolTruthy {
	return unknownIsEitherRight(either)
		&& hasKind(either, "either-bool")
		&& hasKind(either, "either-truthy");
}

type ToBoolEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherBool<GenericValue>>;

export function whenEitherIsBoolTruthy<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToBoolEither<GenericInput>,
			EitherBoolTruthy
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToBoolEither<GenericInput>, EitherBoolTruthy> {
	if (unknownIsEitherLeft(input)) {
		return input as never;
	} else if (!unknownIsEitherBoolTruthy(input) && unknownIsEitherRight(input)) {
		return input as never;
	}

	const either = unknownIsEitherRight(input) || unknownIsEitherLeft(input)
		? input
		: createEitherBool(input);

	if (unknownIsEitherBoolTruthy(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
