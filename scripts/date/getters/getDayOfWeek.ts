import { type TheDate, type Timezone, toNative } from "..";

const weekdayMapper = {
	Sunday: 0,
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thursday: 4,
	Friday: 5,
	Saturday: 6,
};

export function getDayOfWeek<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const nativeDate = toNative(input);

	if (timezone === "UTC") {
		return nativeDate.getUTCDay();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		weekday: "long",
	});
	const weekday = formatter.format(nativeDate) as keyof typeof weekdayMapper;

	return weekdayMapper[weekday];
}
