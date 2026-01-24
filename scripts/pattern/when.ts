import { type AnyValue, type AnyFunction, type BreakGenericLink, type IsEqual, type EscapeVoid } from "@scripts/common";
import { isResult, result, type PatternResult } from "./result";

type ComputePredicateInput<GenericValue extends unknown> = Exclude<
	IsEqual<GenericValue, unknown> extends true
		? AnyValue
		: GenericValue,
	PatternResult
>;

/**
 * {@include pattern/when/index.md}
 */
export function when<
	GenericInput extends unknown,
	GenericInputValue extends ComputePredicateInput<GenericInput>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	GenericPredicatedInput extends GenericInputValue,
	GenericOutput extends AnyValue | EscapeVoid,
>(
	predicate: (
		& ((input: GenericInputValue) => input is GenericPredicatedInput)
		& (
			IsEqual<ComputePredicateInput<GenericInput>, GenericInputValue> extends true
				? unknown
				: (input: ComputePredicateInput<NoInfer<GenericInput>>) => input is GenericPredicatedInput
		)
	),
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (
	input: (
		| GenericInput
		| GenericInputPatternResult
		| GenericInputValue
	)
) => (
	| GenericInputPatternResult
	| Exclude<BreakGenericLink<GenericInput>, GenericPredicatedInput | PatternResult>
	| PatternResult<GenericOutput>
);

export function when<
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
		& ((input: GenericInputValue) => boolean)
		& (
			IsEqual<ComputePredicateInput<GenericInput>, GenericInputValue> extends true
				? unknown
				: (input: ComputePredicateInput<NoInfer<GenericInput>>) => boolean
		)
	),
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
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (
	| GenericInputPatternResult
	| Exclude<BreakGenericLink<GenericInput>, GenericPredicatedInput | PatternResult>
	| PatternResult<GenericOutput>
);

export function when<
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

export function when(
	...args: [unknown, AnyFunction, AnyFunction]
		| [AnyFunction, AnyFunction]
) {
	if (args.length === 2) {
		const [predicate, theFunction] = args;

		return (input: unknown) => when(input, predicate as never, theFunction);
	}

	const [input, predicate, theFunction] = args;

	if (!isResult(input) && predicate(input)) {
		return result(theFunction(input));
	}

	return input;
}
