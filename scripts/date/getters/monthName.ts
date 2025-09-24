import type { NewDate, DateParts, MonthMapper, Months } from "../types";

export function getMonthName<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString> ?
	DateParts<DateString>["month"] extends keyof MonthMapper ?
		MonthMapper[DateParts<DateString>["month"]]
		: Months
	: Months;

export function getMonthName(date: NewDate): any {
	const nativeDate = new Date(date);
	const monthIndex = nativeDate.getUTCMonth();

	const months: Months[] = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return months[monthIndex]!;
}
