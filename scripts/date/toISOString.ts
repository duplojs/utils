import { toNative } from "./toNative";
import type { TheDate } from "./types";

/**
 * {@include date/toISOString/index.md}
 */
export function toISOString<
	GenericInput extends TheDate,
>(input: GenericInput) {
	const date = toNative(input);

	return date.toISOString();
}
