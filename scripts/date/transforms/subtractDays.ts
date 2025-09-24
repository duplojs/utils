import type { NewDate } from "../types";

export function subtractDays<
	GenericDate extends NewDate,
>(
	days: number,
): (date: GenericDate) => NewDate;

export function subtractDays<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	days: number,
): NewDate;

export function subtractDays(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [days] = args;
		return (date: NewDate) => subtractDays(date, days);
	}

	const [date, days] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCDate(nativeDate.getUTCDate() - days);

	return nativeDate.toISOString();
}
