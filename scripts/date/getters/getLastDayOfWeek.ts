import { toNative } from "../toNative";
import type { TheDate } from "../types";

export function getLastDayOfWeek(input: TheDate): TheDate {
	const nativeDate = toNative(input);
	const dayOfWeek = nativeDate.getUTCDay();
	const daysToSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

	nativeDate.setUTCDate(nativeDate.getUTCDate() + daysToSunday);
	nativeDate.setUTCHours(23, 59, 59, 999);

	const timestamp = nativeDate.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
