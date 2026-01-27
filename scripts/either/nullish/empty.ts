import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createEitherKind } from "../kind";
import { left, type Left, isLeft } from "../left";
import { type Right, isRight } from "../right";
import { nullish } from "./create";
import { nullishKind } from "./base";

export type NullishValue = null | undefined;

export const nullishEmptyKind = createEitherKind(
	"nullish-empty",
);

/**
 * @deprecated use nullishEmptyKind
 */
export const eitherNullishEmptyKind = nullishEmptyKind;

type _NullishEmpty<
	GenericValue extends NullishValue = NullishValue,
> = (
	& Left<"nullish", GenericValue>
	& Kind<typeof nullishKind.definition>
	& Kind<typeof nullishEmptyKind.definition>
);

export interface NullishEmpty<
	GenericValue extends NullishValue = NullishValue,
> extends _NullishEmpty<GenericValue> {

}

/**
 * @deprecated use NullishEmpty
 */
export type EitherNullishEmpty<
	GenericValue extends NullishValue = NullishValue,
> = NullishEmpty<GenericValue>;

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
>(value: GenericValue = undefined as GenericValue): NullishEmpty<GenericValue> {
	return nullishKind.setTo(
		nullishEmptyKind.setTo(
			left("nullish", value),
		),
	);
}

type Either = Right | Left;

export function isNullishEmpty<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, NullishEmpty> {
	return isLeft(input)
		&& nullishKind.has(input)
		&& nullishEmptyKind.has(input);
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
				NullishEmpty
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, NullishEmpty>;
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
				NullishEmpty
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, NullishEmpty>;
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
