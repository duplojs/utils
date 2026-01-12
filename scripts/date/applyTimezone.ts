import { createOrThrow } from "./createOrThrow";
import { getTimezoneOffset } from "./getTimezoneOffset";
import { type Timezone } from "./timezone";
import { toTimestamp } from "./toTimestamp";
import { type TheDate } from "./types";

/**
 * {@include date/applyTimezone/index.md}
 */
export function applyTimezone(
	timeZone: Timezone,
): (theDate: TheDate) => TheDate;

export function applyTimezone(theDate: TheDate, timeZone: Timezone): TheDate;

export function applyTimezone(
	...args: [Timezone] | [TheDate, Timezone]
): TheDate | ((theDate: TheDate) => TheDate) {
	if (args.length === 1) {
		const [timeZone] = args;
		return (theDate: TheDate) => applyTimezone(theDate, timeZone);
	}

	const [theDate, timeZone] = args;
	const timestamp = toTimestamp(theDate);

	return createOrThrow(timestamp - getTimezoneOffset(theDate, timeZone));
}
