import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "@scripts/common";
import { type Kind, type MergeKind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { createEitherKind } from "../kind";
import { eitherOptionalKind } from "./base";
import { optional } from "./create";
import { left, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";

export const eitherOptionalEmptyKind = createEitherKind(
	"optional-empty",
);

export interface EitherOptionalEmpty extends MergeKind<
	| Kind<typeof eitherOptionalKind.definition>
	| Kind<typeof eitherOptionalEmptyKind.definition>,
	EitherLeft<"optional", undefined>
> {

}

type Either = EitherRight | EitherLeft;

export function optionalEmpty(): EitherOptionalEmpty {
	return eitherOptionalKind.setTo(
		eitherOptionalEmptyKind.setTo(
			left("optional", undefined),
		),
	);
}

export function isOptionalEmpty<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherOptionalEmpty> {
	return isLeft(input)
		&& eitherOptionalKind.has(input)
		&& eitherOptionalEmptyKind.has(input);
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
				ToOptionalEither<GenericInput>,
				EitherOptionalEmpty
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<
	ToOptionalEither<BreakGenericLink<GenericInput>>,
	EitherOptionalEmpty
>;
export function whenIsOptionalEmpty<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToOptionalEither<GenericInput>,
				EitherOptionalEmpty
			>
		>
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<ToOptionalEither<GenericInput>, EitherOptionalEmpty>;
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
