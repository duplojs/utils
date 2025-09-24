import type { NewDate, DateParts } from "../types";

export function getTimezone<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString> ?
	DateParts<DateString>["timezone"]
	: string;

export function getTimezone(date: NewDate): any {
	const millisecondStart = date.indexOf(".", 19);

	if (millisecondStart !== -1) {
		return date.slice(millisecondStart + 4);
	} else {
		return date.slice(19);
	}
}
