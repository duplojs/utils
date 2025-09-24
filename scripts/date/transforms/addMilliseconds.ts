import type { NewDate } from "../types";

export function addMilliseconds<
	GenericDate extends NewDate,
>(
	milliseconds: number,
): (date: GenericDate) => NewDate;

export function addMilliseconds<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	milliseconds: number,
): NewDate;

export function addMilliseconds(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [milliseconds] = args;
		return (date: NewDate) => addMilliseconds(date, milliseconds);
	}

	const [date, milliseconds] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCMilliseconds(nativeDate.getUTCMilliseconds() + milliseconds);

	return nativeDate.toISOString();
}
