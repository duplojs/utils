import { type EscapeVoid, type AnyValue } from "@scripts/common";
import { left, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { nullish } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export type NullishValue = null | undefined;

export interface EitherNullishEmpty<
	GenericValue extends NullishValue = NullishValue,
>extends EitherLeft<"nullish", GenericValue>,
	Kind<"either-nullish">,
	Kind<"either-empty"> {

}

export function nullishEmpty<
	const GenericValue extends NullishValue = undefined,
>(value: GenericValue = undefined as GenericValue): EitherNullishEmpty<GenericValue> {
	return {
		"kind-either-empty": null,
		"kind-either-nullish": null,
		...left("nullish", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isNullishEmpty<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherNullishEmpty> {
	return isLeft(input)
		&& hasKind(input, "either-nullish")
		&& hasKind(input, "either-empty");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof nullish<GenericValue>>;

export function whenIsNullishEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishEmpty
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
export function whenIsNullishEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherNullishEmpty
		>["value"]
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
export function whenIsNullishEmpty(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsNullishEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return input as never;
	} else if (!isNullishEmpty(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: nullish(input as any);

	if (isNullishEmpty(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
