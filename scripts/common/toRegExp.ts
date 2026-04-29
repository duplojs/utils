import type { AnyTuple } from "./types";
import { escapeRegExp } from "./escapeRegExp";

/**
 * {@include common/toRegExp/index.md}
 */
export function toRegExp(input: string | AnyTuple<string> | RegExp): RegExp {
	if (typeof input === "string") {
		return new RegExp(`^${escapeRegExp(input)}$`);
	}

	if (input instanceof Array) {
		const result = input.map(escapeRegExp).join("|");

		return new RegExp(`^(?:${result})$`);
	}

	return input;
}
