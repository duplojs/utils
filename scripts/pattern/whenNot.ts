import { type EscapeVoid, type AnyFunction, type AnyValue } from "../common/types";
import { result, type PatternResult } from "./result";

export function whenNot<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput
): (input: GenericInput) =>
	| PatternResult<GenericOutput>
	| GenericPredicatedInput;

export function whenNot<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput
):
	| PatternResult<GenericOutput>
	| GenericPredicatedInput;

export function whenNot<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	ifFunction: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput
): (input: GenericInput) =>
	| PatternResult<GenericOutput>
	| GenericInput;

export function whenNot<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput
):
	| PatternResult<GenericOutput>
	| GenericInput;

export function whenNot(
	...args: [AnyValue, AnyFunction, AnyFunction] | [ AnyFunction, AnyFunction]
): any {
	if (args.length === 2) {
		const [ifFunction, theFunction] = args;

		return (input: AnyValue) => whenNot(
			input,
			ifFunction as never,
			theFunction as never,
		);
	}

	const [input, ifFunction, theFunction] = args;

	if (!ifFunction(input)) {
		return result(theFunction(input));
	}

	return input;
}
