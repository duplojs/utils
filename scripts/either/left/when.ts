import { type AnyValue } from "@scripts/common/types/anyValue";
import { type EitherLeft } from "./create";
import { isEitherLeft } from "./is";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export function whenEitherIsLeft<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	theFunction: (eitherValue: Extract<GenericInput, EitherLeft>["value"]) => GenericOutput,
): (input: GenericInput) => Exclude<GenericInput, EitherLeft> | GenericOutput;
export function whenEitherIsLeft<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	theFunction: (eitherValue: Extract<GenericInput, EitherLeft>["value"]) => GenericOutput,
): Exclude<GenericInput, EitherLeft> | GenericOutput;
export function whenEitherIsLeft(...args: [AnyValue, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;

		return (input: AnyValue) => whenEitherIsLeft(
			input,
			theFunction,
		);
	}

	const [input, theFunction] = args;

	if (isEitherLeft(input)) {
		return theFunction(input.value);
	}

	return input;
}
