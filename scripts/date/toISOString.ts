import { toNative } from "./toNative";
import type { TheDate } from "./types";

export function toISOString<
	GenericInput extends TheDate,
>(input: GenericInput) {
	const date = toNative(input);

	return date.toISOString();
}
