import type { NewDate, DateParts } from "../types";

export function getSecond<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString> ?
	DateParts<DateString>["second"]
	: number;

export function getSecond(date: NewDate): any {
	return parseInt(date.slice(17, 19));
}
