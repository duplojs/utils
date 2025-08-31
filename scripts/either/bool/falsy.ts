import { createLeft, type EitherLeft, isLeft } from "../left";
import { type EitherRight, isRight } from "../right";
import { createBool } from "./create";
import { hasKind, type Kind } from "@scripts/common/kind";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export type BoolFalsyValue = 0 | "" | undefined | null | false;

export interface EitherBoolFalsy<
	GenericValue extends BoolFalsyValue = BoolFalsyValue,
> extends EitherLeft<"bool", GenericValue>,
	Kind<"either-bool">,
	Kind<"either-falsy"> {

}

export function createBoolFalsy<
	const GenericValue extends BoolFalsyValue = undefined,
>(value: GenericValue = undefined as GenericValue): EitherBoolFalsy<GenericValue> {
	return {
		"kind-either-falsy": null,
		"kind-either-bool": null,
		...createLeft("bool", value),
	};
}

type Either = EitherRight | EitherLeft;

export function isEitherBoolFalsy(
	either: unknown,
): either is EitherBoolFalsy {
	return isLeft(either)
		&& hasKind(either, "either-bool")
		&& hasKind(either, "either-falsy");
}

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof createBool<GenericValue>>;

export function whenIsBoolFalsy<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherBoolFalsy
		>["value"]
	) => GenericOutput,
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
export function whenIsBoolFalsy<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Extract<
			ToEither<GenericInput>,
			EitherBoolFalsy
		>["value"]
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
	} else if (!isEitherBoolFalsy(input) && isLeft(input)) {
		return input as never;
	}

	const either = isRight(input) || isLeft(input)
		? input
		: createBool(input);

	if (isEitherBoolFalsy(either)) {
		return theFunction(either.value);
	}

	return either as never;
}
