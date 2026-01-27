import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createEitherKind } from "../kind";
import { optionalKind } from "./base";
import { optional } from "./create";
import { left, type Left, isLeft } from "../left";
import { type Right, isRight } from "../right";

export const optionalEmptyKind = createEitherKind(
	"optional-empty",
);

/**
 * @deprecated use optionalEmptyKind
 */
export const eitherOptionalEmptyKind = optionalEmptyKind;

type _OptionalEmpty = (
	& Left<"optional", undefined>
	& Kind<typeof optionalKind.definition>
	& Kind<typeof optionalEmptyKind.definition>
);

export interface OptionalEmpty extends _OptionalEmpty {

}

/**
 * @deprecated use OptionalEmpty
 */
export type EitherOptionalEmpty = OptionalEmpty;

type Either = Right | Left;

/**
 * {@include either/isOptionalEmpty/index.md}
 */
/**
 * {@include either/optionalEmpty/index.md}
 */
/**
 * {@include either/whenIsOptionalEmpty/index.md}
 */
export function optionalEmpty(): OptionalEmpty {
	return optionalKind.setTo(
		optionalEmptyKind.setTo(
			left("optional", undefined),
		),
	);
}

export function isOptionalEmpty<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, OptionalEmpty> {
	return isLeft(input)
		&& optionalKind.has(input)
		&& optionalEmptyKind.has(input);
}

type ToOptionalEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof optional<GenericValue>>;

export function whenIsOptionalEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToOptionalEither<
					BreakGenericLink<GenericInput>
				>,
				OptionalEmpty
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<
	ToOptionalEither<BreakGenericLink<GenericInput>>,
	OptionalEmpty
>;
export function whenIsOptionalEmpty<
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
				OptionalEmpty
			>
		>
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToOptionalEither<GenericInput>, OptionalEmpty>;
export function whenIsOptionalEmpty(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsOptionalEmpty(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return input as never;
	} else if (!isOptionalEmpty(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: optional(input as any);

	if (isOptionalEmpty(either)) {
		return theFunction(undefined);
	}

	return either as never;
}
