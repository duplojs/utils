import { escapeRegExp } from "./escapeRegExp";

/**
 * {@include common/toRegExp/index.md}
 */
export function toRegExp(input: string | string[] | RegExp): RegExp {
	if (typeof input === "string") {
		return new RegExp(`^${escapeRegExp(input)}$`);
	}

	if (Array.isArray(input)) {
		const result = input.map(escapeRegExp).join("|");

		return new RegExp(`^(?:${result})$`);
	}

	return input;
}
