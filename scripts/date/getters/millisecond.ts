import type { NewDate, DateParts } from "../types";

export function getMillisecond<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString> ?
	DateParts<DateString>["milliseconds"] extends undefined
		? 0
		: DateParts<DateString>["milliseconds"]
	: number;

export function getMillisecond(date: NewDate): number {
	const millisecondStart = date.indexOf(".", 19);
	if (millisecondStart === -1) {
		return 0;
	}

	return parseInt(date.slice(millisecondStart + 1, millisecondStart + 4));
}
