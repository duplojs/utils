import type { NewDate } from "../types";

export function addYears<
	GenericDate extends NewDate,
>(
	years: number,
): (date: GenericDate) => NewDate;

export function addYears<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	years: number,
): NewDate;

export function addYears(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [years] = args;
		return (date: NewDate) => addYears(date, years);
	}

	const [date, years] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCFullYear(nativeDate.getUTCFullYear() + years);

	return nativeDate.toISOString();
}
