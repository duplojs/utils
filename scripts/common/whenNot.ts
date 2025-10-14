import { type EscapeVoid, type AnyFunction, type AnyValue, type BreakGenericLink } from "./types";

export function whenNot<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput
): (input: GenericInput) =>
	| GenericOutput
	| BreakGenericLink<GenericPredicatedInput>;
export function whenNot<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput
):
	| GenericOutput
	| GenericPredicatedInput;
export function whenNot<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	ifFunction: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput
): (input: GenericInput) =>
	| GenericOutput
	| GenericInput;
export function whenNot<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput
):
	| GenericOutput
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
		return theFunction(input);
	}

	return input;
}
