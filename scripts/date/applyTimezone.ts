import { getTimezoneOffset } from "./getTimezoneOffset";
import type { Timezone } from "./timezone";
import { toTimestamp } from "./toTimestamp";
import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";

/**
 * {@include date/applyTimezone/index.md}
 */
export function applyTimezone(
	timeZone: Timezone,
): (input: TheDate | SerializedTheDate) => TheDate;

export function applyTimezone(
	input: TheDate | SerializedTheDate,
	timeZone: Timezone
): TheDate;

export function applyTimezone(
	...args: [Timezone] | [TheDate | SerializedTheDate, Timezone]
) {
	if (args.length === 1) {
		const [timeZone] = args;
		return (theDate: TheDate | SerializedTheDate) => applyTimezone(theDate, timeZone);
	}

	const [theDate, timeZone] = args;
	const timestamp = toTimestamp(theDate);

	return TheDate.new(timestamp - getTimezoneOffset(theDate, timeZone));
}
