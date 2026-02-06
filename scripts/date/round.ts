import { TheDate } from "./theDate";
import { toNative } from "./toNative";
import type { SerializedTheDate, Unit } from "./types";

export type RoundUnit = Exclude<Unit, "millisecond">;

const stepMapper: Record<RoundUnit, (date: Date) => number> = {
	second: (date) => date.setUTCMilliseconds(0),
	minute: (date) => date.setUTCSeconds(0, 0),
	hour: (date) => date.setUTCMinutes(0, 0, 0),
	day: (date) => date.setUTCHours(0, 0, 0, 0),
	month: (date) => new Date(date.setUTCDate(1)).setUTCHours(0, 0, 0, 0),
	year: (date) => {
		date.setUTCMonth(0, 1);
		return date.setUTCHours(0, 0, 0, 0);
	},
};

/**
 * {@include date/round/index.md}
 */
export function round(
	input: (TheDate | SerializedTheDate),
	unit: RoundUnit = "day",
) {
	const date = toNative(input);

	const timestamp = stepMapper[unit](date);

	return TheDate.new(timestamp);
}
