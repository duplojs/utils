import type { NewDate } from "../types";

export function addSeconds<
	GenericDate extends NewDate,
>(
	seconds: number,
): (date: GenericDate) => NewDate;

export function addSeconds<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	seconds: number,
): NewDate;

export function addSeconds(...args: [number] | [NewDate, number]): any {
	if (args.length === 1) {
		const [seconds] = args;
		return (date: NewDate) => addSeconds(date, seconds);
	}

	const [date, seconds] = args;

	const nativeDate = new Date(date);
	nativeDate.setUTCSeconds(nativeDate.getUTCSeconds() + seconds);

	return nativeDate.toISOString();
}
