import { hasKind, type Kind } from "@scripts/common/kind";
import { left, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { nullable } from "./create";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type EscapeVoid, type AnyValue } from "@scripts/common";

export interface EitherNullableEmpty
	extends EitherLeft<"nullable", null>,
	Kind<"either-nullable">,
	Kind<"either-empty"> {

}

export function nullableEmpty(): EitherNullableEmpty {
	return {
		"kind-either-empty": null,
		"kind-either-nullable": null,
		...left("nullable", null),
	};
}

type Either = EitherRight | EitherLeft;

export function isNullableEmpty<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherNullableEmpty> {
	return isLeft(input)
		&& hasKind(input, "either-nullable")
		&& hasKind(input, "either-empty");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof nullable<GenericValue>>;

export function whenIsNullableEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableEmpty
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
export function whenIsNullableEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullableEmpty
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
export function whenIsNullableEmpty(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsNullableEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return input as never;
	} else if (!isNullableEmpty(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: nullable(input as any);

	if (isNullableEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
