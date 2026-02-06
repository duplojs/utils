import type { SerializedTheDate } from "../types";
import { TheDate } from "../theDate";
import { toNative } from "../toNative";

/**
 * {@include date/getFirstDayOfWeek/index.md}
 */
export function getFirstDayOfWeek<
	GenericInput extends TheDate | SerializedTheDate,
>(input: GenericInput): TheDate {
	const nativeDate = toNative(input);
	const dayOfWeek = nativeDate.getUTCDay();
	const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

	nativeDate.setUTCHours(0, 0, 0, 0);
	nativeDate.setUTCDate(nativeDate.getUTCDate() + daysToMonday);

	return TheDate.new(nativeDate.getTime());
}
