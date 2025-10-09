import { type EscapeVoid, type AnyFunction, type AnyValue } from "./types";

export function when<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (input: GenericInput) =>
	| GenericOutput
	| Exclude<GenericInput, GenericPredicatedInput>;
export function when<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
):
	| GenericOutput
	| Exclude<GenericInput, GenericPredicatedInput>;
export function when<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	ifFunction: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput
): (input: GenericInput) =>
	| GenericOutput
	| GenericInput;
export function when<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput
):
	| GenericOutput
	| GenericInput;
export function when(
	...args: [AnyValue, AnyFunction, AnyFunction] | [ AnyFunction, AnyFunction]
): any {
	if (args.length === 2) {
		const [ifFunction, theFunction] = args;

		return (input: AnyValue) => when(
			input,
			ifFunction as never,
			theFunction as never,
		);
	}

	const [input, ifFunction, theFunction] = args;

	if (ifFunction(input)) {
		return theFunction(input);
	}

	return input;
}
