import { type AnyValue, type AnyFunction, type BreakGenericLink } from "@scripts/common";
import { isResult, result, type PatternResult } from "./result";

export function when<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericPredicatedInput extends GenericInputValue,
	GenericOutput extends AnyValue,
>(
	predicate: (
		input: GenericInputValue
	) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (
	input: (
		| GenericInput
		| GenericInputPatternResult
		| GenericInputValue
	)
) => (
	| GenericInputPatternResult
	| Exclude<BreakGenericLink<GenericInputValue>, GenericPredicatedInput>
	| PatternResult<GenericOutput>
);

export function when<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericOutput extends AnyValue,
>(
	predicate: (
		input: GenericInputValue
	) => boolean,
	theFunction: (predicatedInput: GenericInputValue) => GenericOutput
): (
	input: (
		| GenericInput
		| GenericInputPatternResult
		| GenericInputValue
	)
) => (
	| GenericInputPatternResult
	| GenericInputValue
	| PatternResult<GenericOutput>
);

export function when<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericPredicatedInput extends GenericInputValue,
	GenericOutput extends AnyValue,
>(
	input: (
		| GenericInput
		| GenericInputPatternResult
		| GenericInputValue
	),
	predicate: (
		input: GenericInputValue
	) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (
	| GenericInputPatternResult
	| Exclude<GenericInputValue, GenericPredicatedInput>
	| PatternResult<GenericOutput>
);

export function when<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericOutput extends AnyValue,
>(
	input: (
		| GenericInput
		| GenericInputPatternResult
		| GenericInputValue
	),
	predicate: (
		input: GenericInputValue
	) => boolean,
	theFunction: (predicatedInput: GenericInputValue) => GenericOutput
): (
	| GenericInputPatternResult
	| GenericInputValue
	| PatternResult<GenericOutput>
);

export function when(
	...args: [AnyValue, AnyFunction, AnyFunction]
		| [AnyFunction, AnyFunction]
) {
	if (args.length === 2) {
		const [predicate, theFunction] = args;

		return (input: AnyValue) => when(input, predicate as never, theFunction);
	}

	const [input, predicate, theFunction] = args;

	if (!isResult(input) && predicate(input)) {
		return result(theFunction(input));
	}

	return input;
}
