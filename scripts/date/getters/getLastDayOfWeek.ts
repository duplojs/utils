import type { SerializedTheDate } from "../types";
import { TheDate } from "../theDate";
import { toNative } from "../toNative";

/**
 * {@include date/getLastDayOfWeek/index.md}
 */
export function getLastDayOfWeek<
	GenericInput extends TheDate | SerializedTheDate,
>(input: GenericInput): TheDate {
	const nativeDate = toNative(input);
	const dayOfWeek = nativeDate.getUTCDay();
	const daysToSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

	nativeDate.setUTCDate(nativeDate.getUTCDate() + daysToSunday);
	nativeDate.setUTCHours(23, 59, 59, 999);

	return TheDate.new(nativeDate.getTime());
}
