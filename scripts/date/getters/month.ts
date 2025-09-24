import type { NewDate, DateParts } from "../types";

export function getMonth<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString> ?
	DateParts<DateString>["month"]
	: number;

export function getMonth(date: NewDate): any {
	return parseInt(date.slice(5, 7));
}
