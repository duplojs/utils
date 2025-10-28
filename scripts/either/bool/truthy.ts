import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind, type MergeKind } from "@scripts/common/kind";
import { eitherBoolKind } from "./base";
import { createEitherKind } from "../kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type EitherLeft, isLeft } from "../left";
import { right, type EitherRight, isRight } from "../right";
import { bool } from "./create";

export const eitherBoolTruthyKind = createEitherKind(
	"bool-truthy",
);

export interface EitherBoolTruthy<
	GenericValue extends unknown = unknown,
> extends MergeKind<
		| Kind<typeof eitherBoolKind.definition>
		| Kind<typeof eitherBoolTruthyKind.definition>,
		EitherRight<"bool", GenericValue>
	> {

}

export function boolTruthy<
	const GenericValue extends unknown,
>(value: GenericValue): EitherBoolTruthy<GenericValue> {
	return eitherBoolKind.setTo(
		eitherBoolTruthyKind.setTo(
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
