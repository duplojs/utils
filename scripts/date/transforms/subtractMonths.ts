import type { NewDate } from "../types";

export function subtractMonths<
	GenericDate extends NewDate,
>(
	months: number,
): (date: GenericDate) => NewDate;

export function subtractMonths<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	months: number,
): NewDate;

export function subtractMonths(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [months] = args;
		return (date: NewDate) => subtractMonths(date, months);
	}

	const [date, months] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCMonth(nativeDate.getUTCMonth() - months);

	return nativeDate.toISOString();
}
