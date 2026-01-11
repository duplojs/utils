import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type EitherLeft } from "./create";
import { isLeft } from "./is";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

/**
 * {@include either/whenIsLeft/index.md}
 */
export function whenIsLeft<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				EitherLeft
			>
		>
	) => GenericOutput,
): (input: GenericInput) => Exclude<BreakGenericLink<GenericInput>, EitherLeft> | GenericOutput;
export function whenIsLeft<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				EitherLeft
			>
		>
	) => GenericOutput,
): Exclude<GenericInput, EitherLeft> | GenericOutput;
export function whenIsLeft(...args: [unknown, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: unknown) => whenIsLeft(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isLeft(input)) {
		return theFunction(unwrap(input));
	}

	return input;
}
