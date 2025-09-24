import type { NewDate } from "../types";

export function subtractHours<
	GenericDate extends NewDate,
>(
	hours: number,
): (date: GenericDate) => NewDate;

export function subtractHours<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	hours: number,
): NewDate;

export function subtractHours(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [hours] = args;
		return (date: NewDate) => subtractHours(date, hours);
	}

	const [date, hours] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCHours(nativeDate.getUTCHours() - hours);

	return nativeDate.toISOString();
}
