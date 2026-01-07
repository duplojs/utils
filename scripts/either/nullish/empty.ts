import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createEitherKind } from "../kind";
import { left, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { nullish } from "./create";
import { eitherNullishKind } from "./base";

export type NullishValue = null | undefined;

export const eitherNullishEmptyKind = createEitherKind(
	"nullish-empty",
);

type _EitherNullishEmpty<
	GenericValue extends NullishValue = NullishValue,
> = (
	& EitherLeft<"nullish", GenericValue>
	& Kind<typeof eitherNullishKind.definition>
	& Kind<typeof eitherNullishEmptyKind.definition>
);

export interface EitherNullishEmpty<
	GenericValue extends NullishValue = NullishValue,
> extends _EitherNullishEmpty<GenericValue> {

}

/**
 * {@include either/isNullishEmpty/index.md}
 */
/**
 * {@include either/nullishEmpty/index.md}
 */
/**
 * {@include either/whenIsNullishEmpty/index.md}
 */
export function nullishEmpty<
	const GenericValue extends NullishValue = undefined,
>(value: GenericValue = undefined as GenericValue): EitherNullishEmpty<GenericValue> {
	return eitherNullishKind.setTo(
		eitherNullishEmptyKind.setTo(
			left("nullish", value),
		),
	);
}

type Either = EitherRight | EitherLeft;

export function isNullishEmpty<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherNullishEmpty> {
	return isLeft(input)
		&& eitherNullishKind.has(input)
		&& eitherNullishEmptyKind.has(input);
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
		eitherValue: Unwrap<
			Extract<
				ToEither<
					BreakGenericLink<GenericInput>
				>,
				EitherNullishEmpty
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullishEmpty>;
export function whenIsNullishEmpty<
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
				EitherNullishEmpty
			>
		>
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
		return theFunction(unwrap(either));
	}

	return either as never;
}
