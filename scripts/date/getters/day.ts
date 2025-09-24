import type { NewDate, DateParts } from "../types";

export function getDay<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString> ?
	DateParts<DateString>["day"]
	: number;

export function getDay(date: NewDate): any {
	return parseInt(date.slice(8, 10));
}
