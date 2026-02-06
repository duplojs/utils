import { TheDate } from "./theDate";
import { toTimestamp } from "./toTimestamp";
import type { SerializedTheDate } from "./types";

/**
 * {@include date/toNative/index.md}
 */
export function toNative<
	GenericInput extends TheDate | SerializedTheDate,
>(input: GenericInput): Date {
	if (input instanceof TheDate) {
		return input.toNative();
	}

	const timestamp = toTimestamp(input);

	return new Date(timestamp);
}
