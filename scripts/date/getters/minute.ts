import type { NewDate, DateParts } from "../types";

export function getMinute<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString> ?
	DateParts<DateString>["minute"]
	: number;

export function getMinute(date: NewDate): any {
	return parseInt(date.slice(14, 16));
}
