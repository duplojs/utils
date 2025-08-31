import { type EitherRight } from "./create";
import { isRight } from "./is";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export function whenIsRight<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (eitherValue: Extract<GenericInput, EitherRight>["value"]) => GenericOutput,
): (input: GenericInput) => Exclude<GenericInput, EitherRight> | GenericOutput;
export function whenIsRight<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	input: GenericInput,
	theFunction: (eitherValue: Extract<GenericInput, EitherRight>["value"]) => GenericOutput,
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
		return theFunction(input.value);
	}

	return input;
}
