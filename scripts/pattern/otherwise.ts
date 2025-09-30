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

export function otherwise(
	theFunction: AnyFunction,
) {
	return (input: any) => isResult(input)
		? unwrap(input) as never
		: theFunction(input) as never;
}
