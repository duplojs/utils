import type { NewDate } from "../types";

export function addWeeks<
	GenericDate extends NewDate,
>(
	weeks: number,
): (date: GenericDate) => NewDate;

export function addWeeks<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	weeks: number,
): NewDate;

export function addWeeks(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [weeks] = args;
		return (date: NewDate) => addWeeks(date, weeks);
	}

	const [date, weeks] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCDate(nativeDate.getUTCDate() + (weeks * 7));

	return nativeDate.toISOString();
}
