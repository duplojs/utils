import { type IsEqual, type AnyFunction, type AnyValue, type EscapeVoid, type FixDeepFunctionInfer } from "@scripts/common";
import { type PatternValue, type Pattern } from "./types/pattern";
import { type PatternResult, result } from "./result";
import { type ComplexMatchedValue, type ComplexUnMatchedValue } from "./types";
import { isMatch } from "./isMatch";

export function match<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	const GenericPattern extends Pattern<GenericInputValue>,
	GenericPatternValue extends PatternValue<GenericPattern>,
	GenericOutput extends AnyValue | EscapeVoid,
	GenericMatchedValue extends Extract<
		ComplexMatchedValue<
			GenericInputValue,
			GenericPatternValue
		>,
		any
	>,
>(
	pattern: FixDeepFunctionInfer<
		Pattern<GenericInputValue>,
		GenericPattern
	>,
	theFunction: (
		value: GenericMatchedValue
	) => GenericOutput,
): (input: GenericInput | GenericInputValue | GenericInputPatternResult) => (
	| (
		IsEqual<GenericMatchedValue, never> extends true
			? never
			: PatternResult<GenericOutput>
	)
	| GenericInputPatternResult
	| Extract<
		ComplexUnMatchedValue<
			GenericInputValue,
			GenericPatternValue
		>,
		any
	>
);

export function match<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>,
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>,
	const GenericPattern extends Pattern<GenericInputValue>,
	GenericPatternValue extends PatternValue<GenericPattern>,
	GenericOutput extends AnyValue | EscapeVoid,
	GenericMatchedValue extends Extract<
		ComplexMatchedValue<
			GenericInputValue,
			GenericPatternValue
		>,
		any
	>,
>(
	input: GenericInput | GenericInputValue | GenericInputPatternResult,
	pattern: FixDeepFunctionInfer<
		Pattern<GenericInputValue>,
		GenericPattern
	>,
	theFunction: (
		value: GenericMatchedValue
	) => GenericOutput,
): (
	| (
		IsEqual<GenericMatchedValue, never> extends true
			? never
			: PatternResult<GenericOutput>
	)
	| GenericInputPatternResult
	| Extract<
		ComplexUnMatchedValue<
			GenericInputValue,
			GenericPatternValue
		>,
		any
	>
);

export function match(
	...args: [unknown, Pattern, AnyFunction] | [Pattern, AnyFunction]
) {
	if (args.length === 2) {
		const [pattern, theFunction] = args;

		return (input: AnyValue) => match(input, pattern, theFunction);
	}

	const [input, pattern, theFunction] = args;

	if (isMatch(input, pattern)) {
		return result(
			theFunction(
				input,
			),
		);
	}

	return input;
}
