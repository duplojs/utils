import * as DGenerator from "@scripts/generator";
import type { ExtractResult } from "./extract";

/**
 * {@include string/extractAll/index.md}
 */
export function extractAll<
	GenericInput extends string,
>(
	pattern: RegExp,
): (input: GenericInput) => Generator<ExtractResult>;

export function extractAll<
	GenericInput extends string,
>(
	input: GenericInput,
	pattern: RegExp,
): Generator<ExtractResult>;

export function extractAll(...args: [string, RegExp] | [RegExp]): any {
	if (args.length === 1) {
		const [pattern] = args;
		return (input: string) => extractAll(input, pattern);
	}

	const [input, pattern] = args;

	return DGenerator.map(
		input.matchAll(pattern),
		(value) => ({
			matchedValue: value[0],
			groups: value.slice(1),
			namedGroups: value.groups ? { ...value.groups } : undefined,
			offset: value.index ?? 0,
			self: value.input ?? input,
		}),
	);
}
