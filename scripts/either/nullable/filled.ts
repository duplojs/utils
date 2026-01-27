import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type Left, isLeft } from "../left";
import { right, type Right, isRight } from "../right";
import { nullable } from "./create";
import { nullableKind } from "./base";
import { createEitherKind } from "../kind";

export const nullableFilledKind = createEitherKind(
	"nullable-filled",
);

/**
 * @deprecated use nullableFilledKind
 */
export const eitherNullableFilledKind = nullableFilledKind;

type _NullableFilled<
	GenericValue extends unknown = unknown,
> = (
	& Right<"nullable", GenericValue>
	& Kind<typeof nullableKind.definition>
	& Kind<typeof nullableFilledKind.definition>
);

export interface NullableFilled<
	GenericValue extends unknown = unknown,
> extends _NullableFilled<GenericValue> {

}

/**
 * @deprecated use NullableFilled
 */
export type EitherNullableFilled<
	GenericValue extends unknown = unknown,
> = NullableFilled<GenericValue>;

type Either = Right | Left;

/**
 * {@include either/isNullableFilled/index.md}
 */
/**
 * {@include either/nullableFilled/index.md}
 */
/**
 * {@include either/whenIsNullableFilled/index.md}
 */
export function nullableFilled<
	const GenericValue extends unknown,
>(value: GenericValue): NullableFilled<GenericValue> {
	return nullableKind.setTo(
		nullableFilledKind.setTo(
			right("nullable", value),
		),
	);
}

export function isNullableFilled<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, NullableFilled> {
	return isRight(input)
		&& nullableKind.has(input)
		&& nullableFilledKind.has(input);
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
				ToEither<
					BreakGenericLink<GenericInput>
				>,
				NullableFilled
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, NullableFilled>;
export function whenIsNullableFilled<
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
				NullableFilled
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, NullableFilled>;
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
