import type { SerializedTheDate } from "../types";
import { TheDate } from "../theDate";
import { toNative } from "../toNative";

/**
 * {@include date/getFirstDayOfMonth/index.md}
 */
export function getFirstDayOfMonth<
	GenericInput extends TheDate | SerializedTheDate,
>(input: GenericInput): TheDate {
	const nativeDate = toNative(input);

	nativeDate.setUTCDate(1);
	nativeDate.setUTCHours(0, 0, 0, 0);

	return TheDate.new(nativeDate.getTime());
}
