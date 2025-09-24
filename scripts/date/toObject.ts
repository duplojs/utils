import type { DateObject, DateParts, NewDate } from "./types";

export function toObject<
	GenericInput extends NewDate,
>(
	date: GenericInput,
): GenericInput extends NewDate<infer DateString>
	? DateParts<DateString>
	: DateObject;

export function toObject(date: NewDate): any {
	const isoRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3}))?([Z]|[+-]\d{2}:\d{2})$/;
	const match = date.match(isoRegex) as RegExpExecArray;

	const [__, year, month, day, hour, minute, second, milliseconds, timezone] = match;

	return {
		year: parseInt(year!),
		month: parseInt(month!),
		day: parseInt(day!),
		hour: parseInt(hour!),
		minute: parseInt(minute!),
		second: parseInt(second!),
		milliseconds: milliseconds ? parseInt(milliseconds) : undefined,
		timezone: timezone!,
	};
}
