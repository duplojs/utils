import type { NewDate } from "../types";

export function subtractYears<
	GenericDate extends NewDate,
>(
	years: number,
): (date: GenericDate) => NewDate;

export function subtractYears<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	years: number,
): NewDate;

export function subtractYears(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [years] = args;
		return (date: NewDate) => subtractYears(date, years);
	}

	const [date, years] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCFullYear(nativeDate.getUTCFullYear() - years);

	return nativeDate.toISOString();
}
