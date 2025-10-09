import { type FixDeepFunctionInfer } from "@scripts/common";
import { isMatch } from "./isMatch";
import { type Pattern, type ToolPattern, SymbolToolPatternFunctionLabel } from "./types/pattern";

const SymbolToolPatternFunction = Symbol.for(SymbolToolPatternFunctionLabel);

export function union<
	GenericInput extends unknown,
	const GenericPatterns extends readonly [
		Pattern<GenericInput extends infer InferredInput ? InferredInput : never>,
		...Pattern<GenericInput extends infer InferredInput ? InferredInput : never>[],
	],
>(
	...patterns: FixDeepFunctionInfer<
		readonly [Pattern<GenericInput>, ...Pattern<GenericInput>[]],
		GenericPatterns
	>
): ToolPattern<
		GenericInput,
		GenericPatterns[number] extends infer InferredPattern
			? InferredPattern
			: never
	> {
	return {
		[SymbolToolPatternFunction]: (
			input: GenericInput,
		) => {
			for (const pattern of patterns) {
				if (isMatch(input, pattern)) {
					return true;
				}
			}

			return false;
		},
	} as never;
}
