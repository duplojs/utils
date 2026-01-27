import { type EscapeVoid, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { type Right } from "./create";
import { isRight } from "./is";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

/**
 * {@include either/whenIsRight/index.md}
 */
export function whenIsRight<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				Right
			>
		>
	) => GenericOutput,
): (input: GenericInput) => Exclude<BreakGenericLink<GenericInput>, Right> | GenericOutput;
export function whenIsRight<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				Right
			>
		>
	) => GenericOutput,
): Exclude<GenericInput, Right> | GenericOutput;
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
