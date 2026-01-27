import { right, type Right, isRight } from "../right";
import { type Left, isLeft } from "../left";
import { nullish } from "./create";
import { type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { createEitherKind } from "../kind";
import { nullishKind } from "./base";

export const nullishFilledKind = createEitherKind(
	"nullish-filled",
);

/**
 * @deprecated use nullishFilledKind
 */
export const eitherNullishFilledKind = nullishFilledKind;

type _NullishFilled<
	GenericValue extends unknown = unknown,
> = (
	& Right<"nullish", GenericValue>
	& Kind<typeof nullishKind.definition>
	& Kind<typeof nullishFilledKind.definition>
);

export interface NullishFilled<
	GenericValue extends unknown = unknown,
> extends _NullishFilled<GenericValue> {

}

/**
 * @deprecated use NullishFilled
 */
export type EitherNullishFilled<
	GenericValue extends unknown = unknown,
> = NullishFilled<GenericValue>;

/**
 * {@include either/isNullishFilled/index.md}
 */
/**
 * {@include either/nullishFilled/index.md}
 */
/**
 * {@include either/whenIsNullishFilled/index.md}
 */
export function nullishFilled<
	const GenericValue extends unknown,
>(value: GenericValue): NullishFilled<GenericValue> {
	return nullishKind.setTo(
		nullishFilledKind.setTo(
			right("nullish", value),
		),
	);
}

type Either = Right | Left;

export function isNullishFilled<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, NullishFilled> {
	return isRight(input)
		&& nullishKind.has(input)
		&& nullishFilledKind.has(input);
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof nullish<GenericValue>>;

export function whenIsNullishFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<
					BreakGenericLink<GenericInput>
				>,
				NullishFilled
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, NullishFilled>;
export function whenIsNullishFilled<
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
				NullishFilled
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, NullishFilled>;
export function whenIsNullishFilled(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsNullishFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;
	if (isLeft(input)) {
		return input as never;
	} else if (!isNullishFilled(input) && isRight(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: nullish(input);

	if (isNullishFilled(either)) {
		return theFunction(unwrap(either));
	}

	return either as never;
}
