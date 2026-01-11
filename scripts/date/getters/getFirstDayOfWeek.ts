import { toNative } from "../toNative";
import type { TheDate } from "../types";

/**
 * {@include date/getFirstDayOfWeek/index.md}
 */
export function getFirstDayOfWeek(input: TheDate): TheDate {
	const nativeDate = toNative(input);
	const dayOfWeek = nativeDate.getUTCDay();
	const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

	nativeDate.setUTCHours(0, 0, 0, 0);
	nativeDate.setUTCDate(nativeDate.getUTCDate() + daysToMonday);

	const timestamp = nativeDate.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
