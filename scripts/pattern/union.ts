import { type ForcePredicate, type FixDeepFunctionInfer } from "@scripts/common";
import { isMatch } from "./isMatch";
import { type PatternValue, type Pattern } from "./types/pattern";

export function union<
	GenericInput extends unknown,
	const GenericPatterns extends readonly [Pattern<GenericInput>, ...Pattern<GenericInput>[]],
>(
	...patterns: FixDeepFunctionInfer<
		readonly [Pattern<GenericInput>, ...Pattern<GenericInput>[]],
		GenericPatterns
	>
) {
	return (
		input: GenericInput,
	): input is ForcePredicate<
		GenericInput,
		PatternValue<GenericPatterns[number]>
	> => {
		for (const pattern of patterns) {
			if (isMatch(input, pattern)) {
				return true;
			}
		}

		return true;
	};
}
