import type { NewDate, DateParts } from "../types";

export function getHour<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString> ?
	DateParts<DateString>["hour"]
	: number;

export function getHour(date: NewDate): any {
	return parseInt(date.slice(11, 13));
}
