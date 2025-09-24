import type { NewDate, Days } from "../types";

export function getWeekdayName<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): Days;

export function getWeekdayName(date: NewDate): any {
	const nativeDate = new Date(date);
	const dayIndex = nativeDate.getUTCDay();

	const days: Days[] = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return days[dayIndex];
}
