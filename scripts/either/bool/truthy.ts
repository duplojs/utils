import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind } from "@scripts/common/kind";
import { boolKind } from "./base";
import { createEitherKind } from "../kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type Left, isLeft } from "../left";
import { right, type Right, isRight } from "../right";
import { bool } from "./create";

export const boolTruthyKind = createEitherKind(
	"bool-truthy",
);

/**
 * @deprecated use boolTruthyKind
 */
export const eitherBoolTruthyKind = boolTruthyKind;

type _BoolTruthy<
	GenericValue extends unknown = unknown,
> = (
	& Right<"bool", GenericValue>
	& Kind<typeof boolKind.definition>
	& Kind<typeof boolTruthyKind.definition>
);

export interface BoolTruthy<
	GenericValue extends unknown = unknown,
> extends _BoolTruthy<GenericValue> {

}

/**
 * @deprecated use BoolTruthy
 */
export type EitherBoolTruthy<
	GenericValue extends unknown = unknown,
> = BoolTruthy<GenericValue>;

/**
 * {@include either/boolTruthy/index.md}
 */
/**
 * {@include either/isBoolTruthy/index.md}
 */
/**
 * {@include either/whenIsBoolTruthy/index.md}
 */
export function boolTruthy<
	const GenericValue extends unknown,
>(value: GenericValue): BoolTruthy<GenericValue> {
	return boolKind.setTo(
		boolTruthyKind.setTo(
			right("bool", value),
		),
	);
}

type Either = Right | Left;

export function isBoolTruthy<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, BoolTruthy> {
	return isRight(input)
		&& boolKind.has(input)
		&& boolTruthyKind.has(input);
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
				ToEither<
					BreakGenericLink<GenericInput>
				>,
				BoolTruthy
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<
	ToEither<BreakGenericLink<GenericInput>>,
	BoolTruthy
>;
export function whenIsBoolTruthy<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<
					BreakGenericLink<GenericInput>
				>,
				BoolTruthy
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, BoolTruthy>;
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
