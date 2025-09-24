import type { NewDate } from "../types";

export function addMonths<
	GenericDate extends NewDate,
>(
	months: number,
): (date: GenericDate) => NewDate;

export function addMonths<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	months: number,
): NewDate;

export function addMonths(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [months] = args;
		return (date: NewDate) => addMonths(date, months);
	}

	const [date, months] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCMonth(nativeDate.getUTCMonth() + months);

	return nativeDate.toISOString();
}
