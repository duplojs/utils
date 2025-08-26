import { createEitherLeft, type EitherLeft, isEitherLeft } from "../left";
import { type EitherRight, isEitherRight } from "../right";
import { createEitherBool } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { type EscapeVoid } from "@scripts/common/types/escapeVoid";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export type BoolFalsyValue = 0 | "" | undefined | null | false;

export interface EitherBoolFalsy<
	GenericValue extends BoolFalsyValue = BoolFalsyValue,
> extends EitherLeft<"bool", GenericValue>,
	Kind<"either-bool">,
	Kind<"either-falsy"> {

}

export function createEitherBoolFalsy<
	GenericValue extends BoolFalsyValue = undefined,
>(value: GenericValue = undefined as GenericValue): EitherBoolFalsy<GenericValue> {
	return {
		"kind-either-falsy": null,
		"kind-either-bool": null,
		...createEitherLeft("bool", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isEitherBoolFalsy(
	either: unknown,
): either is EitherBoolFalsy {
	return isEitherLeft(either)
		&& hasKind(either, "either-bool")
		&& hasKind(either, "either-falsy");
}

type ToEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherBool<GenericValue>>;

export function whenEitherIsBoolFalsy<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherBoolFalsy
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
export function whenEitherIsBoolFalsy<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherBoolFalsy
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
export function whenEitherIsBoolFalsy(...args: [AnyValue, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenEitherIsBoolFalsy(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isEitherRight(input)) {
		return input as never;
	} else if (!isEitherBoolFalsy(input) && isEitherLeft(input)) {
		return input as never;
	}

	const either = isEitherRight(input) || isEitherLeft(input)
		? input
		: createEitherBool(input);

	if (isEitherBoolFalsy(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
