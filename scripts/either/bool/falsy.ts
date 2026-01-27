import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink, type FalsyValue } from "@scripts/common";
import { type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createEitherKind } from "../kind";
import { boolKind } from "./base";
import { bool } from "./create";
import { left, type Left, isLeft } from "../left";
import { type Right, isRight } from "../right";

export const boolFalsyKind = createEitherKind(
	"bool-falsy",
);

/**
 * @deprecated use boolFalsyKind
 */
export const eitherBoolFalsyKind = boolFalsyKind;

type _BoolFalsy<
	GenericValue extends FalsyValue = FalsyValue,
> = (
	& Left<"bool", GenericValue>
	& Kind<typeof boolKind.definition>
	& Kind<typeof boolFalsyKind.definition>
);

export interface BoolFalsy<
	GenericValue extends FalsyValue = FalsyValue,
> extends _BoolFalsy<GenericValue> {

}

/**
 * @deprecated use BoolFalsy
 */
export type EitherBoolFalsy<
	GenericValue extends FalsyValue = FalsyValue,
> = BoolFalsy<GenericValue>;

/**
 * {@include either/boolFalsy/index.md}
 */
/**
 * {@include either/isBoolFalsy/index.md}
 */
/**
 * {@include either/whenIsBoolFalsy/index.md}
 */
export function boolFalsy<
	const GenericValue extends FalsyValue = undefined,
>(value: GenericValue = undefined as GenericValue): BoolFalsy<GenericValue> {
	return boolKind.setTo(
		boolFalsyKind.setTo(
			left("bool", value),
		),
	);
}

type Either = Right | Left;

export function isBoolFalsy<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, BoolFalsy> {
	return isLeft(input)
		&& boolKind.has(input)
		&& boolFalsyKind.has(input);
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof bool<GenericValue>>;

export function whenIsBoolFalsy<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<
					BreakGenericLink<GenericInput>
				>,
				BoolFalsy
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<
	ToEither<BreakGenericLink<GenericInput>>,
	BoolFalsy
>;

export function whenIsBoolFalsy<
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
				BoolFalsy
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, BoolFalsy>;
export function whenIsBoolFalsy(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsBoolFalsy(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return input as never;
	} else if (!isBoolFalsy(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: bool(input as any);

	if (isBoolFalsy(either)) {
		return theFunction(unwrap(either));
	}

	return either as never;
}
