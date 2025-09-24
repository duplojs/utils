import type { NewDate, DateParts } from "../types";

export function getYear<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString> ?
	DateParts<DateString>["year"]
	: number;

export function getYear(date: NewDate): any {
	return parseInt(date.slice(0, 4));
}
