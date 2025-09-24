import type { NewDate } from "../types";

export function addHours<
	GenericDate extends NewDate,
>(
	hours: number,
): (date: GenericDate) => NewDate;

export function addHours<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	hours: number,
): NewDate;

export function addHours(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [hours] = args;
		return (date: NewDate) => addHours(date, hours);
	}

	const [date, hours] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCHours(nativeDate.getUTCHours() + hours);

	return nativeDate.toISOString();
}
