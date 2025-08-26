import { createEitherRight, type EitherRight, isEitherRight } from "../right";
import { createEitherBool } from "./create";
import { type EitherLeft, isEitherLeft } from "../left";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { type EscapeVoid } from "@scripts/common/types/escapeVoid";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface EitherBoolTruthy<
	GenericValue extends unknown = unknown,
> extends EitherRight<"bool", GenericValue>,
	Kind<"either-bool">,
	Kind<"either-truthy"> {

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

export function isEitherBoolTruthy(
	either: unknown,
): either is EitherBoolTruthy {
	return isEitherRight(either)
		&& hasKind(either, "either-bool")
		&& hasKind(either, "either-truthy");
}

type ToEither<
	GenericValue extends AnyValue,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createEitherBool<GenericValue>>;

export function whenEitherIsBoolTruthy<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherBoolTruthy
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolTruthy>;
export function whenEitherIsBoolTruthy<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherBoolTruthy
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolTruthy>;
export function whenEitherIsBoolTruthy(...args: [AnyValue, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenEitherIsBoolTruthy(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isEitherLeft(input)) {
		return input as never;
	} else if (!isEitherBoolTruthy(input) && isEitherRight(input)) {
		return input as never;
	}

	const either = isEitherRight(input) || isEitherLeft(input)
		? input
		: createEitherBool(input);

	if (isEitherBoolTruthy(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
