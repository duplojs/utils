import { type AnyValue } from "@scripts/common/types/anyValue";
import { type EitherRight } from "./create";
import { isEitherRight } from "./is";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export function whenEitherIsRight<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	theFunction: (eitherValue: Extract<GenericInput, EitherRight>["value"]) => GenericOutput,
): (input: GenericInput) => Exclude<GenericInput, EitherRight> | GenericOutput;
export function whenEitherIsRight<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (eitherValue: Extract<GenericInput, EitherRight>["value"]) => GenericOutput,
): Exclude<GenericInput, EitherRight> | GenericOutput;
export function whenEitherIsRight(...args: [AnyValue, AnyFunction] | [AnyFunction]) {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: AnyValue) => whenEitherIsRight(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isEitherRight(input)) {
		return theFunction(input.value);
	}

	return input;
}
