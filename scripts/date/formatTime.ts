import {
	millisecondInOneHour,
	millisecondInOneMinute,
	millisecondInOneWeek,
	millisecondsInOneDay,
	millisecondsInOneSecond,
} from "./constants";
import { type TheTime } from "./theTime";
import { toTimeValue } from "./toTimeValue";
import type { SerializedTheTime } from "./types";

const formatStringRegex = /WW|DD|HH|mm|ss|SSS/g;

type FormatToken = "WW" | "DD" | "HH" | "mm" | "ss" | "SSS";

/**
 * {@include date/formatTime/index.md}
 */
export function formatTime<
	GenericInput extends TheTime | SerializedTheTime,
	GenericFormat extends string,
>(
	formatString: GenericFormat,
): (input: GenericInput) => string;

export function formatTime<
	GenericInput extends TheTime | SerializedTheTime,
	GenericFormat extends string,
>(
	input: GenericInput,
	formatString: GenericFormat,
): string;

export function formatTime(
	...args: [string] | [TheTime | SerializedTheTime, string]
) {
	if (args.length === 1) {
		const [formatString] = args;
		return (input: TheTime | SerializedTheTime) => formatTime(input, formatString);
	}

	const [input, formatString] = args;
	const timeValue = toTimeValue(input);

	const isNegative = timeValue < 0;
	let remaining = Math.abs(timeValue);

	const weeks = Math.floor(remaining / millisecondInOneWeek);
	remaining -= weeks * millisecondInOneWeek;

	const days = Math.floor(remaining / millisecondsInOneDay);
	remaining -= days * millisecondsInOneDay;

	const hours = Math.floor(remaining / millisecondInOneHour);
	remaining -= hours * millisecondInOneHour;

	const minutes = Math.floor(remaining / millisecondInOneMinute);
	remaining -= minutes * millisecondInOneMinute;

	const seconds = Math.floor(remaining / millisecondsInOneSecond);
	remaining -= seconds * millisecondsInOneSecond;

	const tokens: Record<FormatToken, string> = {
		WW: weeks.toString().padStart(2, "0"),
		DD: days.toString().padStart(2, "0"),
		HH: hours.toString().padStart(2, "0"),
		mm: minutes.toString().padStart(2, "0"),
		ss: seconds.toString().padStart(2, "0"),
		SSS: remaining.toString().padStart(3, "0"),
	};

	const formatted = formatString.replace(
		formatStringRegex,
		(token) => tokens[token as FormatToken],
	);

	return isNegative ? `-${formatted}` : formatted;
}
