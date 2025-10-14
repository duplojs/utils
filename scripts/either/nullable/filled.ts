import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { createKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type EitherLeft, isLeft } from "../left";
import { right, type EitherRight, isRight } from "../right";
import { nullable } from "./create";
import { eitherNullableKind } from "./base";

export const eitherNullableFilledKind = createKind(
	"either-nullable-filled",
);

type _EitherNullableFilled<
	GenericValue extends unknown = unknown,
> = (
	& EitherRight<"nullable", GenericValue>
	& Kind<typeof eitherNullableKind.definition>
	& Kind<typeof eitherNullableFilledKind.definition>
);

export interface EitherNullableFilled<
	GenericValue extends unknown = unknown,
> extends _EitherNullableFilled<GenericValue> {

}

type Either = EitherRight | EitherLeft;

export function nullableFilled<
	const GenericValue extends unknown,
>(value: GenericValue): EitherNullableFilled<GenericValue> {
	return eitherNullableKind.addTo(
		eitherNullableFilledKind.addTo(
			right("nullable", value),
		),
	);
}

export function isNullableFilled<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherNullableFilled> {
	return isRight(input)
		&& eitherNullableKind.has(input)
		&& eitherNullableFilledKind.has(input);
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
): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullableFilled>;
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
