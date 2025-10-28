import { right, type EitherRight, isRight } from "../right";
import { type EitherLeft, isLeft } from "../left";
import { nullish } from "./create";
import { type Kind, type MergeKind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";
import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { createEitherKind } from "../kind";
import { eitherNullishKind } from "./base";

export const eitherNullishFilledKind = createEitherKind(
	"nullish-filled",
);

export interface EitherNullishFilled<
	GenericValue extends unknown = unknown,
> extends MergeKind<
		| Kind<typeof eitherNullishKind.definition>
		| Kind<typeof eitherNullishFilledKind.definition>,
		EitherRight<"nullish", GenericValue>
	> {

}

export function nullishFilled<
	const GenericValue extends unknown,
>(value: GenericValue): EitherNullishFilled<GenericValue> {
	return eitherNullishKind.setTo(
		eitherNullishFilledKind.setTo(
			right("nullish", value),
		),
	);
}

type Either = EitherRight | EitherLeft;

export function isNullishFilled<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherNullishFilled> {
	return isRight(input)
		&& eitherNullishKind.has(input)
		&& eitherNullishKind.has(input);
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
				ToEither<GenericInput>,
				EitherNullishFilled
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullishFilled>;
export function whenIsNullishFilled<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<GenericInput>,
				EitherNullishFilled
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
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
