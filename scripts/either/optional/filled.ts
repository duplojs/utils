import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createEitherKind } from "../kind";
import { eitherOptionalKind } from "./base";
import { optional } from "./create";
import { type EitherLeft, isLeft } from "../left";
import { right, type EitherRight, isRight } from "../right";

export const eitherOptionalFilledKind = createEitherKind(
	"optional-filled",
);

type _EitherOptionalFilled<
	GenericValue extends unknown = unknown,
> = (
	& EitherRight<"optional", GenericValue>
	& Kind<typeof eitherOptionalKind.definition>
	& Kind<typeof eitherOptionalFilledKind.definition>
);

export interface EitherOptionalFilled<
	GenericValue extends unknown = unknown,
> extends _EitherOptionalFilled<GenericValue> {

}

type Either = EitherRight | EitherLeft;

export function optionalFilled<
	const GenericValue extends unknown,
>(value: GenericValue): EitherOptionalFilled<GenericValue> {
	return eitherOptionalKind.setTo(
		eitherOptionalFilledKind.setTo(
			right("optional", value),
		),
	);
}

export function isOptionalFilled<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherOptionalFilled> {
	return isRight(input)
		&& eitherOptionalKind.has(input)
		&& eitherOptionalFilledKind.has(input);
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
				ToOptionalEither<
					BreakGenericLink<GenericInput>
				>,
				EitherOptionalFilled
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<
	ToOptionalEither<BreakGenericLink<GenericInput>>,
	EitherOptionalFilled
>;
export function whenIsOptionalFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToOptionalEither<
					BreakGenericLink<GenericInput>
				>,
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
