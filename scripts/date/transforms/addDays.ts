import type { NewDate } from "../types";

export function addDays<
	GenericDate extends NewDate,
>(
	days: number,
): (date: GenericDate) => NewDate;

export function addDays<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	days: number,
): NewDate;

export function addDays(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [days] = args;
		return (date: NewDate) => addDays(date, days);
	}

	const [date, days] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCDate(nativeDate.getUTCDate() + days);

	return nativeDate.toISOString();
}
