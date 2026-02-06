import { type TheDate } from "./theDate";
import type { Timezone } from "./timezone";
import { toNative } from "./toNative";
import type { SerializedTheDate } from "./types";

const formatStringRegex = /YYYY|YY|MM|DD|HH|mm|ss|SSS|ZZ/g;

type FormatToken = "YYYY" | "YY" | "MM" | "DD" | "HH" | "mm" | "ss" | "SSS" | "ZZ";

/**
 * {@include date/format/index.md}
 */
export function format<
	GenericInput extends TheDate | SerializedTheDate,
	GenericFormat extends string,
	GenericTimezone extends Timezone,
>(
	formatString: GenericFormat,
	timezone: GenericTimezone,
): (input: GenericInput) => string;

export function format<
	GenericInput extends TheDate | SerializedTheDate,
	GenericFormat extends string,
	GenericTimezone extends Timezone,
>(
	input: GenericInput,
	formatString: GenericFormat,
	timezone: GenericTimezone,
): string;

export function format(
	...args: [string, Timezone] | [TheDate | SerializedTheDate, string, Timezone]
) {
	if (args.length === 2) {
		const [formatString, timezone] = args;
		return (input: TheDate | SerializedTheDate) => format(input, formatString, timezone);
	}

	const [input, formatString, timezone] = args;

	const date = toNative(input);

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});

	const parts = Object.fromEntries(
		formatter.formatToParts(date).map((part) => [part.type, part.value]),
	) as Record<"year" | "month" | "day" | "hour" | "minute" | "second", string>;

	const tokens: Record<FormatToken, string> = {
		YYYY: parts.year,
		YY: parts.year.slice(-2),
		MM: parts.month,
		DD: parts.day,
		HH: parts.hour,
		mm: parts.minute,
		ss: parts.second,
		SSS: date.getMilliseconds().toString(),
		ZZ: timezone,
	};

	return formatString.replace(
		formatStringRegex,
		(token) => tokens[token as FormatToken],
	);
}
