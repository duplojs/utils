import { right, type EitherRight, isRight } from "../right";
import { optional } from "./create";
import { type EitherLeft, isLeft } from "../left";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type EscapeVoid, type AnyValue, type Unwrap, unwrap } from "@scripts/common";

export interface EitherOptionalFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"optional", GenericValue>,
	Kind<"either-optional">,
	Kind<"either-filled"> {

}

export function optionalFilled<
	const GenericValue extends unknown,
>(value: GenericValue): EitherOptionalFilled<GenericValue> {
	return {
		"kind-either-filled": null,
		"kind-either-optional": null,
		...right("optional", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isOptionalFilled<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherOptionalFilled> {
	return isRight(input)
		&& hasKind(input, "either-optional")
		&& hasKind(input, "either-filled");
}

type ToOptionalEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof optional<GenericValue>>;

export function whenIsOptionalFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToOptionalEither<GenericInput>,
				EitherOptionalFilled
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalFilled>;
export function whenIsOptionalFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToOptionalEither<GenericInput>,
				EitherOptionalFilled
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalFilled>;
export function whenIsOptionalFilled(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsOptionalFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isLeft(input)) {
		return input as never;
	} else if (!isOptionalFilled(input) && isRight(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: optional(input);

	if (isOptionalFilled(either)) {
		return theFunction(unwrap(either));
	}

	return either as never;
}
