import { type AnyFunction, type AnyValue, unwrap, type Unwrap } from "@scripts/common";
import { isResult, type PatternResult } from "./result";

export function otherwise<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericOutput extends AnyValue,
>(
	theFunction: (rest: GenericInputValue) => GenericOutput
): (input: GenericInput | GenericInputPatternResult | GenericInputValue) => (
	| GenericOutput
	| Unwrap<GenericInputPatternResult>
);

export function otherwise<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericOutput extends AnyValue,
>(
	input: GenericInput | GenericInputPatternResult | GenericInputValue,
	theFunction: (rest: GenericInputValue) => GenericOutput
): (
	| GenericOutput
	| Unwrap<GenericInputPatternResult>
);

export function otherwise(
	...args: [unknown, AnyFunction] | [AnyFunction]
) {
	if (args.length === 1) {
		const [theFunction] = args;
		return (input: unknown) => otherwise(input, theFunction);
	}

	const [input, theFunction] = args;

	return isResult(input)
		? unwrap(input) as never
		: theFunction(input) as never;
}
