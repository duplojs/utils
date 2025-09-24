import type { NewDate } from "../types";

export function addMinutes<
	GenericDate extends NewDate,
>(
	minutes: number,
): (date: GenericDate) => NewDate;

export function addMinutes<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	minutes: number,
): NewDate;

export function addMinutes(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [minutes] = args;
		return (date: NewDate) => addMinutes(date, minutes);
	}

	const [date, minutes] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCMinutes(nativeDate.getUTCMinutes() + minutes);

	return nativeDate.toISOString();
}
