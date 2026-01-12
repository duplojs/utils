import { type EscapeVoid, type AnyFunction, type AnyValue, type BreakGenericLink } from "./types";

/**
 * {@include common/whenElse/index.md}
 */
export function whenElse<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid,
>(
	predicate: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput1,
	elseFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput2
): (input: GenericInput) => BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>;

export function whenElse<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput1,
	elseFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput2
): GenericOutput1 | GenericOutput2;

export function whenElse<
	GenericInput extends AnyValue,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid,
>(
	predicate: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput1,
	elseFunction: (predicatedInput: GenericInput) => GenericOutput2
): (input: GenericInput) =>
	| GenericOutput1
	| GenericOutput2;

export function whenElse<
	GenericInput extends AnyValue,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	predicate: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput1,
	elseFunction: (predicatedInput: GenericInput) => GenericOutput2
): BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>;

export function whenElse(
	...args: [AnyValue, AnyFunction, AnyFunction, AnyFunction]
		| [ AnyFunction, AnyFunction, AnyFunction]
): any {
	if (args.length === 3) {
		const [ifFunction, theFunction, elseFunction] = args;

		return (input: AnyValue) => whenElse(
			input,
			ifFunction as never,
			theFunction as never,
			elseFunction,
		);
	}

	const [input, ifFunction, theFunction, elseFunction] = args;

	if (ifFunction(input)) {
		return theFunction(input);
	} else {
		return elseFunction(input);
	}
}
