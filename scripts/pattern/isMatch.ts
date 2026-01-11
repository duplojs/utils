/* eslint-disable @typescript-eslint/no-for-in-array */
import { type ForcePredicate, type AnyFunction, type AnyValue, type FixDeepFunctionInfer } from "@scripts/common";
import { SymbolToolPatternFunctionLabel, type ToolPattern, type Pattern, type PatternValue } from "./types/pattern";
import { type ComplexMatchedValue } from "./types";

const SymbolToolPatternFunction = Symbol.for(SymbolToolPatternFunctionLabel);

/**
 * {@include pattern/isMatch/index.md}
 */
export function isMatch<
	GenericInput extends AnyValue,
	const GenericPattern extends Pattern<GenericInput>,
>(
	pattern: FixDeepFunctionInfer<
		Pattern<GenericInput>,
		GenericPattern
	>,
): (input: GenericInput,) => input is ForcePredicate<
	GenericInput,
	ComplexMatchedValue<
		GenericInput,
		PatternValue<GenericPattern>
	>
>;

export function isMatch<
	GenericInput extends AnyValue,
	const GenericPattern extends Pattern<GenericInput>,
>(
	input: GenericInput,
	pattern: FixDeepFunctionInfer<
		Pattern<GenericInput>,
		GenericPattern
	>,
): input is ForcePredicate<
	GenericInput,
	ComplexMatchedValue<
		GenericInput,
		PatternValue<GenericPattern>
	>
>;

export function isMatch(
	...args: [unknown, Pattern] | [Pattern]
) {
	if (args.length === 1) {
		const [pattern] = args;

		return (input: AnyValue) => isMatch(input, pattern);
	}

	const [input, pattern] = args;

	if (
		typeof pattern === "string"
		|| typeof pattern === "number"
		|| typeof pattern === "boolean"
		|| typeof pattern === "bigint"
		|| pattern === null
		|| pattern === undefined
	) {
		return input === pattern;
	} else if (
		typeof pattern === "function"
	) {
		return (pattern as AnyFunction)(input);
	} else if (pattern instanceof Array && input instanceof Array) {
		for (const key in pattern) {
			if (
				!isMatch(
					input[key as never],
					(pattern as object)[key as never],
				)
			) {
				return false;
			}
		}

		return true;
	} else if (
		pattern
		&& typeof pattern === "object"
		&& SymbolToolPatternFunction in pattern
	) {
		return ((pattern as ToolPattern)[SymbolToolPatternFunction as never] as AnyFunction)(input);
	} else if (
		pattern
		&& typeof pattern === "object"
		&& input && typeof input === "object"
	) {
		for (const key in pattern) {
			if (
				!isMatch(
					input[key as never],
					(pattern as object)[key as never],
				)
			) {
				return false;
			}
		}

		return true;
	}

	return false;
}
