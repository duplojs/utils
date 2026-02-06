import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import { toNative } from "../toNative";
import type { Timezone } from "../timezone";

const weekdayMapper = {
	Sunday: 0,
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thursday: 4,
	Friday: 5,
	Saturday: 6,
} as const;

/**
 * {@include date/getDayOfWeek/index.md}
 */
export function getDayOfWeek<
	GenericInput extends TheDate | SerializedTheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const date = toNative(input);

	if (timezone === "UTC") {
		return date.getUTCDay();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		weekday: "long",
	});
	const weekday = formatter.format(date) as keyof typeof weekdayMapper;

	return weekdayMapper[weekday];
}
