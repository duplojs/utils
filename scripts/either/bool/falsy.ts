import { type EscapeVoid, type AnyValue, type Unwrap, unwrap } from "@scripts/common";
import { left, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { bool } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export type BoolFalsyValue = 0 | "" | undefined | null | false;

export interface EitherBoolFalsy<
	GenericValue extends BoolFalsyValue = BoolFalsyValue,
> extends EitherLeft<"bool", GenericValue>,
	Kind<"either-bool">,
	Kind<"either-falsy"> {

}

export function boolFalsy<
	const GenericValue extends BoolFalsyValue = undefined,
>(value: GenericValue = undefined as GenericValue): EitherBoolFalsy<GenericValue> {
	return {
		"kind-either-falsy": null,
		"kind-either-bool": null,
		...left("bool", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isBoolFalsy<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherBoolFalsy> {
	return isLeft(input)
		&& hasKind(input, "either-bool")
		&& hasKind(input, "either-falsy");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof bool<GenericValue>>;

export function whenIsBoolFalsy<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<GenericInput>,
				EitherBoolFalsy
			>
		>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
export function whenIsBoolFalsy<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				ToEither<GenericInput>,
				EitherBoolFalsy
			>
		>
	) => GenericOutput,
): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
export function whenIsBoolFalsy(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: Either) => whenIsBoolFalsy(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return input as never;
	} else if (!isBoolFalsy(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: bool(input as any);

	if (isBoolFalsy(either)) {
		return theFunction(unwrap(either));
	}

	return either as never;
}
