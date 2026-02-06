import { TheDate } from "./theDate";
import { toNative } from "./toNative";
import type { SerializedTheDate } from "./types";

/**
 * {@include date/toISOString/index.md}
 */
export function toISOString<
	GenericInput extends TheDate | SerializedTheDate,
>(input: GenericInput) {
	if (input instanceof TheDate) {
		return input.toISOString();
	}

	return toNative(input).toISOString();
}
