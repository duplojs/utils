import type { AnyTuple } from "./types";
import { escapeRegExp } from "./escapeRegExp";
import * as DArray from "@scripts/array";

/**
 * {@include common/toRegExp/index.md}
 */
export function toRegExp(input: string | AnyTuple<string> | RegExp): RegExp {
	if (typeof input === "string") {
		return new RegExp(`^${escapeRegExp(input)}$`);
	}

	if (DArray.is(input)) {
		const result = input.map(escapeRegExp).join("|");

		return new RegExp(`^(?:${result})$`);
	}

	return input;
}
