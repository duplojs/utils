import type { SerializedTheDate } from "../types";
import { TheDate } from "../theDate";
import { toNative } from "../toNative";

/**
 * {@include date/getLastDayOfMonth/index.md}
 */
export function getLastDayOfMonth<
	GenericInput extends TheDate | SerializedTheDate,
>(input: GenericInput): TheDate {
	const nativeDate = toNative(input);

	nativeDate.setUTCMonth(nativeDate.getUTCMonth() + 1, 0);
	nativeDate.setUTCHours(23, 59, 59, 999);

	return TheDate.new(nativeDate.getTime());
}
