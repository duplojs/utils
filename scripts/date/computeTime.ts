import { millisecondsInOneDay, millisecondInOneHour, millisecondInOneMinute, millisecondsInOneSecond, millisecondInOneWeek } from "./constants";
import type { TheTime } from "./theTime";
import { toTimeValue } from "./toTimeValue";
import type { SerializedTheTime } from "./types";

type ComputeTimeUnit = "week" | "day" | "hour" | "minute" | "second" | "millisecond";

const unitMapper = {
	week: 1 / millisecondInOneWeek,
	day: 1 / millisecondsInOneDay,
	hour: 1 / millisecondInOneHour,
	minute: 1 / millisecondInOneMinute,
	second: 1 / millisecondsInOneSecond,
	millisecond: 1,
} as const;

/**
 * {@include date/computeTime/index.md}
 */
export function computeTime(
	unit: ComputeTimeUnit,
): (input: TheTime | SerializedTheTime) => number;

export function computeTime(
	input: TheTime | SerializedTheTime,
	unit: ComputeTimeUnit,
): number;

export function computeTime(
	...args:
	| [ComputeTimeUnit]
	| [TheTime | SerializedTheTime, ComputeTimeUnit]
) {
	if (args.length === 1) {
		const [unit] = args;
		return (input: TheTime | SerializedTheTime) => computeTime(input, unit);
	}

	const [input, unit] = args;

	return toTimeValue(input) * unitMapper[unit];
}
