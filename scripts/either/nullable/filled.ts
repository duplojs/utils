import { right, type EitherRight, isRight } from "../right";
import { nullable } from "./create";
import { type EitherLeft, isLeft } from "../left";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type EscapeVoid, type AnyValue, type Unwrap, unwrap } from "@scripts/common";

export interface EitherNullableFilled<
	GenericValue extends unknown = unknown,
> extends EitherRight<"nullable", GenericValue>,
	Kind<"either-nullable">,
	Kind<"either-filled"> {

}

export function nullableFilled<
	const GenericValue extends unknown,
>(value: GenericValue): EitherNullableFilled<GenericValue> {
	return {
		"kind-either-filled": null,
		"kind-either-nullable": null,
		...right("nullable", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isNullableFilled<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherNullableFilled> {
	return isRight(input)
		&& hasKind(input, "either-nullable")
		&& hasKind(input, "either-filled");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof nullable<GenericValue>>;

export function whenIsNullableFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<GenericInput>,
				EitherNullableFilled
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
export function whenIsNullableFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<GenericInput>,
				EitherNullableFilled
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
export function whenIsNullableFilled(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsNullableFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isLeft(input)) {
		return input as never;
	} else if (!isNullableFilled(input) && isRight(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: nullable(input);

	if (isNullableFilled(either)) {
		return theFunction(unwrap(either));
	}

	return either as never;
}
