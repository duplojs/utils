import { right, type EitherRight, isRight } from "../right";
import { bool } from "./create";
import { type EitherLeft, isLeft } from "../left";
import { createKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { eitherBoolKind } from "./base";

export const eitherBoolTruthyKind = createKind(
	"either-bool-truthy",
);

type _EitherBoolTruthy<
	GenericValue extends unknown = unknown,
> = (
	& EitherRight<"bool", GenericValue>
	& Kind<typeof eitherBoolKind.definition>
	& Kind<typeof eitherBoolTruthyKind.definition>
);

export interface EitherBoolTruthy<
	GenericValue extends unknown = unknown,
> extends _EitherBoolTruthy<GenericValue> {

}

export function boolTruthy<
	const GenericValue extends unknown,
>(value: GenericValue): EitherBoolTruthy<GenericValue> {
	return eitherBoolKind.addTo(
		eitherBoolTruthyKind.addTo(
			right("bool", value),
		),
	);
}

type Either = EitherRight | EitherLeft;

export function isBoolTruthy<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherBoolTruthy> {
	return isRight(input)
		&& eitherBoolKind.has(input)
		&& eitherBoolTruthyKind.has(input);
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
		eitherValue: Unwrap<
			Extract<
				ToEither<GenericInput>,
				EitherBoolTruthy
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<
	ToEither<BreakGenericLink<GenericInput>>,
	EitherBoolTruthy
>;
export function whenIsBoolTruthy<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<GenericInput>,
				EitherBoolTruthy
			>
		>
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
		return theFunction(unwrap(either));
	}

	return either as never;
}
