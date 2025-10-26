import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { createKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { left, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { nullable } from "./create";
import { eitherNullableKind } from "./base";

export const eitherNullableEmptyKind = createKind(
	"either-nullable-empty",
);

type _EitherNullableEmpty = (
	& EitherLeft<"nullable", null>
	& Kind<typeof eitherNullableKind.definition>
	& Kind<typeof eitherNullableEmptyKind.definition>
);

export interface EitherNullableEmpty extends _EitherNullableEmpty {

}

type Either = EitherRight | EitherLeft;

export function nullableEmpty(): EitherNullableEmpty {
	return eitherNullableKind.setTo(
		eitherNullableEmptyKind.setTo(
			left("nullable", null),
		),
	);
}

export function isNullableEmpty<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherNullableEmpty> {
	return isLeft(input)
		&& eitherNullableKind.has(input)
		&& eitherNullableEmptyKind.has(input);
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
				ToEither<GenericInput>,
				EitherNullableEmpty
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
export function whenIsNullableEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<GenericInput>,
				EitherNullableEmpty
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullableEmpty>;
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
