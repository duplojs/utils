import type { NewDate } from "../types";

export function subtractMinutes<
	GenericDate extends NewDate,
>(
	minutes: number,
): (date: GenericDate) => NewDate;

export function subtractMinutes<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	minutes: number,
): NewDate;

export function subtractMinutes(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [minutes] = args;
		return (date: NewDate) => subtractMinutes(date, minutes);
	}

	const [date, minutes] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCMinutes(nativeDate.getUTCMinutes() - minutes);

	return nativeDate.toISOString();
}
