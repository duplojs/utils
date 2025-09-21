import { type AnyFunction, type AnyValue } from "..";
import { isResult, result, type PatternResult } from "./result";

export function whenPrimitive<
	GenericInput extends AnyValue,
	GenericMatch extends Exclude<GenericInput, PatternResult>,
	GenericOutput extends AnyValue,
>(
	primitive: GenericMatch | GenericMatch[],
	theFunction: (predicatedInput: Extract<GenericInput, GenericMatch>) => GenericOutput
): (input: GenericInput) =>
	| PatternResult<GenericOutput>
	| Exclude<GenericInput, GenericMatch>;

export function whenPrimitive(
	primitive: AnyValue,
	theFunction: AnyFunction,
): any {
	const formattedPrimitive = primitive instanceof Array
		? primitive
		: [primitive];

	return (input: AnyValue) => {
		if (!isResult(input) && formattedPrimitive.includes(input)) {
			return result(theFunction(input));
		}

		return input;
	};
}
