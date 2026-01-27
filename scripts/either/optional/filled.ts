import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createEitherKind } from "../kind";
import { optionalKind } from "./base";
import { optional } from "./create";
import { type Left, isLeft } from "../left";
import { right, type Right, isRight } from "../right";

export const optionalFilledKind = createEitherKind(
	"optional-filled",
);

/**
 * @deprecated use optionalFilledKind
 */
export const eitherOptionalFilledKind = optionalFilledKind;

type _OptionalFilled<
	GenericValue extends unknown = unknown,
> = (
	& Right<"optional", GenericValue>
	& Kind<typeof optionalKind.definition>
	& Kind<typeof optionalFilledKind.definition>
);

export interface OptionalFilled<
	GenericValue extends unknown = unknown,
> extends _OptionalFilled<GenericValue> {

}

/**
 * @deprecated use OptionalFilled
 */
export type EitherOptionalFilled<
	GenericValue extends unknown = unknown,
> = OptionalFilled<GenericValue>;

type Either = Right | Left;

/**
 * {@include either/isOptionalFilled/index.md}
 */
/**
 * {@include either/optionalFilled/index.md}
 */
/**
 * {@include either/whenIsOptionalFilled/index.md}
 */
export function optionalFilled<
	const GenericValue extends unknown,
>(value: GenericValue): OptionalFilled<GenericValue> {
	return optionalKind.setTo(
		optionalFilledKind.setTo(
			right("optional", value),
		),
	);
}

export function isOptionalFilled<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, OptionalFilled> {
	return isRight(input)
		&& optionalKind.has(input)
		&& optionalFilledKind.has(input);
}

type ToOptionalEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof optional<GenericValue>>;

export function whenIsOptionalFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToOptionalEither<
					BreakGenericLink<GenericInput>
				>,
				OptionalFilled
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<
	ToOptionalEither<BreakGenericLink<GenericInput>>,
	OptionalFilled
>;
export function whenIsOptionalFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToOptionalEither<
					BreakGenericLink<GenericInput>
				>,
				OptionalFilled
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToOptionalEither<GenericInput>, OptionalFilled>;
export function whenIsOptionalFilled(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsOptionalFilled(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isLeft(input)) {
		return input as never;
	} else if (!isOptionalFilled(input) && isRight(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: optional(input);

	if (isOptionalFilled(either)) {
		return theFunction(unwrap(either));
	}

	return either as never;
}
