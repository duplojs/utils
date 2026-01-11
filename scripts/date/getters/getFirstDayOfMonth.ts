import { toNative } from "../toNative";
import type { TheDate } from "../types";

/**
 * {@include date/getFirstDayOfMonth/index.md}
 */
export function getFirstDayOfMonth(input: TheDate): TheDate {
	const nativeDate = toNative(input);

	nativeDate.setUTCDate(1);
	nativeDate.setUTCHours(0, 0, 0, 0);

	const timestamp = nativeDate.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
