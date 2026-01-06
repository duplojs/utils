import { toNative } from "../toNative";
import type { TheDate } from "../types";

/**
 * {@include date/getLastDayOfMonth/index.md}
 */
export function getLastDayOfMonth(input: TheDate): TheDate {
	const nativeDate = toNative(input);

	nativeDate.setUTCMonth(nativeDate.getUTCMonth() + 1, 0);
	nativeDate.setUTCHours(23, 59, 59, 999);

	const timestamp = nativeDate.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
