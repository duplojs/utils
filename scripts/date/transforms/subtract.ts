import type { NewDate } from "../types";

interface SubtractParams {
	years?: number;
	months?: number;
	weeks?: number;
	days?: number;
	hours?: number;
	minutes?: number;
	seconds?: number;
	milliseconds?: number;
}

export function subtract<
	GenericDate extends NewDate,
>(
	params: SubtractParams,
): (date: GenericDate) => NewDate;

export function subtract<
	GenericDate extends NewDate,
>(
	date: GenericDate,
	params: SubtractParams,
): NewDate;

export function subtract(...args: [SubtractParams] | [NewDate, SubtractParams]): any {
	if (args.length === 1) {
		const [params] = args;
		return (date: NewDate) => subtract(date, params);
	}

	const [date, params] = args;

	const nativeDate = new Date(date);

	if (params.years) {
		nativeDate.setUTCFullYear(nativeDate.getUTCFullYear() - params.years);
	}
	if (params.months) {
		nativeDate.setUTCMonth(nativeDate.getUTCMonth() - params.months);
	}
	if (params.weeks) {
		nativeDate.setUTCDate(nativeDate.getUTCDate() - (params.weeks * 7));
	}
	if (params.days) {
		nativeDate.setUTCDate(nativeDate.getUTCDate() - params.days);
	}
	if (params.hours) {
		nativeDate.setUTCHours(nativeDate.getUTCHours() - params.hours);
	}
	if (params.minutes) {
		nativeDate.setUTCMinutes(nativeDate.getUTCMinutes() - params.minutes);
	}
	if (params.seconds) {
		nativeDate.setUTCSeconds(nativeDate.getUTCSeconds() - params.seconds);
	}
	if (params.milliseconds) {
		nativeDate.setUTCMilliseconds(nativeDate.getUTCMilliseconds() - params.milliseconds);
	}

	return nativeDate.toISOString();
}
