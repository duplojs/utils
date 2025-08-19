import { createEitherLeft, type EitherLeft, unknownIsEitherLeft } from "../left";
import { type EitherBoolTruthy } from "./truthy";
import { type EitherRight, isEitherRight, unknownIsEitherRight } from "../right";
import { createEitherBool } from "./create";
import { hasKind, type TheKind } from "@scripts/common/theKind";
import { type AnyValue } from "@scripts/common/types/AnyValue";

export type BoolFalsyValue = 0 | "" | undefined | null | false;

export interface EitherBoolFalsy<
	GenericValue extends BoolFalsyValue = BoolFalsyValue,
> extends EitherLeft<"bool", GenericValue>,
	TheKind<"either-bool">,
	TheKind<"either-falsy"> {

}

export function createEitherBoolFalsy<
	GenericValue extends BoolFalsyValue,
>(value: GenericValue): EitherBoolFalsy<BoolFalsyValue> {
	return {
		"kind-either-falsy": null,
		"kind-either-bool": null,
		...createEitherLeft("bool", value),
	};
}

type Either = EitherRight | EitherLeft;

type BoolEither = EitherBoolTruthy | EitherBoolFalsy;

export function isEitherBoolFalsy<
	GenericEither extends BoolEither,
>(
	either: GenericEither,
): either is Extract<GenericEither, EitherBoolFalsy> {
	return isEitherRight(either)
		&& hasKind(either, "either-bool")
		&& hasKind(either, "either-falsy");
}

export function unknownIsEitherBoolFalsy(
	either: unknown,
): either is EitherBoolFalsy {
	return unknownIsEitherRight(either)
		&& hasKind(either, "either-bool")
		&& hasKind(either, "either-falsy");
}

type ToOptionalEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherBool<GenericValue>>;

export function whenEitherIsBoolFalsy<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToOptionalEither<GenericInput>,
			EitherBoolFalsy
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToOptionalEither<GenericInput>, EitherBoolFalsy> {
	if (unknownIsEitherRight(input)) {
		return input as never;
	} else if (!unknownIsEitherBoolFalsy(input) && unknownIsEitherLeft(input)) {
		return input as never;
	}

	const either = unknownIsEitherRight(input) || unknownIsEitherLeft(input)
		? input
		: createEitherBool(input);

	if (unknownIsEitherBoolFalsy(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
