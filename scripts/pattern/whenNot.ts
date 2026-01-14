import { type AnyValue, type AnyFunction, type BreakGenericLink, type IsEqual, type EscapeVoid } from "@scripts/common";
import { isResult, result, type PatternResult } from "./result";

/**
 * {@include pattern/whenNot/index.md}
 */
export function whenNot<
	GenericInput extends unknown,
	GenericInputValue extends Exclude<
		IsEqual<GenericInput, unknown> extends true
			? AnyValue
			: GenericInput,
		PatternResult
	>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericPredicatedInput extends GenericInputValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	predicate: (
		input: GenericInputValue
	) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInputValue, GenericPredicatedInput>) => GenericOutput
): (
	input: (
		| GenericInput
		| GenericInputPatternResult
		| GenericInputValue
	)
) => (
	| GenericInputPatternResult
	| Exclude<
		BreakGenericLink<GenericInput>,
		Exclude<GenericInputValue, GenericPredicatedInput> | PatternResult
	>
	| PatternResult<GenericOutput>
);

export function whenNot<
	GenericInput extends unknown,
	GenericInputValue extends Exclude<
		IsEqual<GenericInput, unknown> extends true
			? AnyValue
			: GenericInput,
		PatternResult
	>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericOutput extends AnyValue | EscapeVoid,
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

export function whenNot<
	GenericInput extends unknown,
	GenericInputValue extends Exclude<
		IsEqual<GenericInput, unknown> extends true
			? AnyValue
			: GenericInput,
		PatternResult
	>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericPredicatedInput extends GenericInputValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	input: (
		| GenericInput
		| GenericInputPatternResult
		| GenericInputValue
	),
	predicate: (
		input: GenericInputValue
	) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInputValue, GenericPredicatedInput>) => GenericOutput
): (
	| GenericInputPatternResult
	| Exclude<
		BreakGenericLink<GenericInput>,
		Exclude<GenericInputValue, GenericPredicatedInput> | PatternResult
	>
	| PatternResult<GenericOutput>
);

export function whenNot<
	GenericInput extends unknown,
	GenericInputValue extends Exclude<
		IsEqual<GenericInput, unknown> extends true
			? AnyValue
			: GenericInput,
		PatternResult
	>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericOutput extends AnyValue | EscapeVoid,
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

export function whenNot(
	...args: [unknown, AnyFunction, AnyFunction]
		| [AnyFunction, AnyFunction]
) {
	if (args.length === 2) {
		const [predicate, theFunction] = args;

		return (input: unknown) => whenNot(input, predicate as never, theFunction);
	}

	const [input, predicate, theFunction] = args;

	if (!isResult(input) && !predicate(input)) {
		return result(theFunction(input));
	}

	return input;
}
