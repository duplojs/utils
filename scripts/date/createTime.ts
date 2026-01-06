import { isoTimeRegex, millisecondInOneHour, millisecondInOneMinute, millisecondInOneWeek, millisecondsInOneDay, millisecondsInOneSecond } from "./constants";
import { createTheTime } from "./createTheTime";
import { type TheTime, type SpoolingTime } from "./types";

type Units = "week" | "day" | "hour" | "minute" | "second" | "millisecond";

const unitsMapper: Record<Units, number> = {
	week: millisecondInOneWeek,
	day: millisecondsInOneDay,
	hour: millisecondInOneHour,
	minute: millisecondInOneMinute,
	second: millisecondsInOneSecond,
	millisecond: 1,
};

export function createTime(
	input: number,
	unit?: Units
): TheTime;

export function createTime<
	GenericInput extends SpoolingTime,
>(
	input: GenericInput
): TheTime;

export function createTime(
	input: SpoolingTime | number,
	unit?: Units,
) {
	if (typeof input === "number") {
		return createTheTime(input * unitsMapper[unit ?? "millisecond"]);
	}

	const {
		value = "",
		week = 0,
		day = 0,
		hour = 0,
		minute = 0,
		second = 0,
		millisecond = 0,
	} = input;

	let fromValue = 0;
	const theTimeMatch = value.match(isoTimeRegex);
	if (theTimeMatch) {
		const {
			sign = "+",
			hour,
			minute,
			second = 0,
			millisecond = 0,
		} = theTimeMatch!.groups as Partial<
			Record<
			"sign" | "hour" | "minute" | "second" | "millisecond",
				string
			>
		>;

		fromValue = (Number(hour) * millisecondInOneHour)
			+ (Number(minute) * millisecondInOneMinute)
			+ (Number(second) * millisecondsInOneSecond)
			+ Number(millisecond);

		fromValue = sign === "-"
			? -fromValue
			: fromValue;
	}

	return createTheTime(
		fromValue
		+ (week * millisecondInOneWeek)
		+ (day * millisecondsInOneDay)
		+ (hour * millisecondInOneHour)
		+ (minute * millisecondInOneMinute)
		+ (second * millisecondsInOneSecond)
		+ millisecond,
	);
}
