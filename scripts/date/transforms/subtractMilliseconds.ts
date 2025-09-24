import type { NewDate } from "../types";

export function subtractMilliseconds<
	GenericDate extends NewDate,
>(
	milliseconds: number,
): (date: GenericDate) => NewDate;

export function subtractMilliseconds<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	milliseconds: number,
): NewDate;

export function subtractMilliseconds(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [milliseconds] = args;
		return (date: NewDate) => subtractMilliseconds(date, milliseconds);
	}

	const [date, milliseconds] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCMilliseconds(nativeDate.getUTCMilliseconds() - milliseconds);

	return nativeDate.toISOString();
}
