import type { NewDate } from "../types";

export function subtractWeeks<
	GenericDate extends NewDate,
>(
	weeks: number,
): (date: GenericDate) => NewDate;

export function subtractWeeks<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	weeks: number,
): NewDate;

export function subtractWeeks(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [weeks] = args;
		return (date: NewDate) => subtractWeeks(date, weeks);
	}

	const [date, weeks] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCDate(nativeDate.getUTCDate() - (weeks * 7));

	return nativeDate.toISOString();
}
