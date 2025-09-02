import { type EscapeVoid, type AnyValue } from "@scripts/common";
import { type EitherLeft } from "./create";
import { isLeft } from "./is";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export function whenIsLeft<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (eitherValue: Extract<GenericInput, EitherLeft>["value"]) => GenericOutput,
): (input: GenericInput) => Exclude<GenericInput, EitherLeft> | GenericOutput;
export function whenIsLeft<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (eitherValue: Extract<GenericInput, EitherLeft>["value"]) => GenericOutput,
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
		return theFunction(input.value);
	}

	return input;
}
