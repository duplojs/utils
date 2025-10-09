/* eslint-disable @typescript-eslint/no-for-in-array */
import { type AnyFunction } from "@scripts/common";
import { SymbolToolPatternFunctionLabel, type ToolPattern, type Pattern } from "./types/pattern";

const SymbolToolPatternFunction = Symbol.for(SymbolToolPatternFunctionLabel);

export function isMatch(
	input: unknown,
	pattern: Pattern,
): boolean {
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
