import { toTimestamp } from "./toTimestamp";
import type { TheDate } from "./types";

/**
 * {@include date/toNative/index.md}
 */
export function toNative<
	GenericInput extends TheDate,
>(input: GenericInput): Date {
	const timestamp = toTimestamp(input);

	return new Date(timestamp);
}
