import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { left, type Left, isLeft } from "../left";
import { type Right, isRight } from "../right";
import { nullable } from "./create";
import { nullableKind } from "./base";
import { createEitherKind } from "../kind";

export const nullableEmptyKind = createEitherKind(
	"nullable-empty",
);

/**
 * @deprecated use nullableEmptyKind
 */
export const eitherNullableEmptyKind = nullableEmptyKind;

type _NullableEmpty = (
	& Left<"nullable", null>
	& Kind<typeof nullableKind.definition>
	& Kind<typeof nullableEmptyKind.definition>
);

export interface NullableEmpty extends _NullableEmpty {

}

/**
 * @deprecated use NullableEmpty
 */
export type EitherNullableEmpty = NullableEmpty;

type Either = Right | Left;

/**
 * {@include either/isNullableEmpty/index.md}
 */
/**
 * {@include either/nullableEmpty/index.md}
 */
/**
 * {@include either/whenIsNullableEmpty/index.md}
 */
export function nullableEmpty(): NullableEmpty {
	return nullableKind.setTo(
		nullableEmptyKind.setTo(
			left("nullable", null),
		),
	);
}

export function isNullableEmpty<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, NullableEmpty> {
	return isLeft(input)
		&& nullableKind.has(input)
		&& nullableEmptyKind.has(input);
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof nullable<GenericValue>>;

export function whenIsNullableEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<
					BreakGenericLink<GenericInput>
				>,
				NullableEmpty
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, NullableEmpty>;
export function whenIsNullableEmpty<
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
				NullableEmpty
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, NullableEmpty>;
export function whenIsNullableEmpty(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsNullableEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return input as never;
	} else if (!isNullableEmpty(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: nullable(input as any);

	if (isNullableEmpty(either)) {
		return theFunction(unwrap(either));
	}

	return either as never;
}
