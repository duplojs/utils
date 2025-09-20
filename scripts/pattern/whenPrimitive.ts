import { type AnyFunction, type AnyValue } from "..";
import { result, type PatternResult } from "./result";

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

export function whenPrimitive<
	GenericInput extends AnyValue,
	GenericMatch extends Exclude<GenericInput, PatternResult>,
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	primitive: GenericMatch | GenericMatch[],
	theFunction: (predicatedInput: Extract<GenericInput, GenericMatch>) => GenericOutput
):
	| PatternResult<GenericOutput>
	| Exclude<GenericInput, GenericMatch>;

export function whenPrimitive(
	...args: [AnyValue, AnyValue, AnyFunction] | [ AnyValue, AnyFunction]
): any {
	if (args.length === 2) {
		const [primitive, theFunction] = args;

		return (input: AnyValue) => whenPrimitive(
			input,
			primitive as never,
			theFunction as never,
		);
	}

	const [input, primitive, theFunction] = args;

	const formattedPrimitive = primitive instanceof Array
		? primitive
		: [primitive];

	if (formattedPrimitive.includes(input)) {
		return result(theFunction(input));
	}

	return input;
}
