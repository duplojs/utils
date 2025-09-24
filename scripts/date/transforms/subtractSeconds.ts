import type { NewDate } from "../types";

export function subtractSeconds<
	GenericDate extends NewDate,
>(
	seconds: number,
): (date: GenericDate) => NewDate;

export function subtractSeconds<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	seconds: number,
): NewDate;

export function subtractSeconds(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [seconds] = args;
		return (date: NewDate) => subtractSeconds(date, seconds);
	}

	const [date, seconds] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCSeconds(nativeDate.getUTCSeconds() - seconds);

	return nativeDate.toISOString();
}
