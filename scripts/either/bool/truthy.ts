import { right, type EitherRight, isRight } from "../right";
import { bool } from "./create";
import { type EitherLeft, isLeft } from "../left";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type EscapeVoid, type AnyValue } from "@scripts/common";

export interface EitherBoolTruthy<
	GenericValue extends unknown = unknown,
> extends EitherRight<"bool", GenericValue>,
	Kind<"either-bool">,
	Kind<"either-truthy"> {

}

export function boolTruthy<
	const GenericValue extends unknown,
>(value: GenericValue): EitherBoolTruthy<GenericValue> {
	return {
		"kind-either-truthy": null,
		"kind-either-bool": null,
		...right("bool", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isBoolTruthy<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherBoolTruthy> {
	return isRight(input)
		&& hasKind(input, "either-bool")
		&& hasKind(input, "either-truthy");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof bool<GenericValue>>;

export function whenIsBoolTruthy<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherBoolTruthy
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolTruthy>;
export function whenIsBoolTruthy<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherBoolTruthy
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolTruthy>;
export function whenIsBoolTruthy(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsBoolTruthy(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isLeft(input)) {
		return input as never;
	} else if (!isBoolTruthy(input) && isRight(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: bool(input);

	if (isBoolTruthy(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
