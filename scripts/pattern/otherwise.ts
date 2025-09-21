import { type AnyFunction, type AnyValue, unwrap, type Unwrap } from "@scripts/common";
import { isResult, type PatternResult } from "./result";

export function otherwise<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue,
>(
	theFunction: (rest: Exclude<GenericInput, PatternResult>) => GenericOutput
): (input: GenericInput) => (
	| GenericOutput
	| Unwrap<Extract<GenericInput, PatternResult>>
);

export function otherwise(
	theFunction: AnyFunction,
) {
	return (input: any) => isResult(input)
		? unwrap(input) as never
		: theFunction(input) as never;
}
