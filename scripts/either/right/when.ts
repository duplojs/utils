import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type EitherRight } from "./create";
import { isRight } from "./is";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export function whenIsRight<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				EitherRight
			>
		>
	) => GenericOutput,
): (input: GenericInput) => Exclude<BreakGenericLink<GenericInput>, EitherRight> | GenericOutput;
export function whenIsRight<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				EitherRight
			>
		>
	) => GenericOutput,
): Exclude<GenericInput, EitherRight> | GenericOutput;
export function whenIsRight(...args: [unknown, AnyFunction] | [AnyFunction]) {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: unknown) => whenIsRight(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isRight(input)) {
		return theFunction(unwrap(input));
	}

	return input;
}
