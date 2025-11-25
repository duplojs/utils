import { loop } from "@scripts/generator/loop";
import { millisecondsInOneSecond, millisecondInOneMinute, millisecondInOneHour, millisecondsInOneDay } from "./constants";
import type { TheDate, Unit } from "./types";
import { toTimestamp } from "./toTimestamp";
import { createOrThrow } from "./createOrThrow";

const stepMapper: Record<Unit, (timestamp: number, direction: 1 | -1) => number> = {
	milisecond: (timestamp, direction) => timestamp + direction,
	second: (timestamp, direction) => timestamp + (direction * millisecondsInOneSecond),
	minute: (timestamp, direction) => timestamp + (direction * millisecondInOneMinute),
	hour: (timestamp, direction) => timestamp + (direction * millisecondInOneHour),
	day: (timestamp, direction) => timestamp + (direction * millisecondsInOneDay),
	month: (timestamp, direction) => {
		const date = new Date(timestamp);
		date.setUTCMonth(date.getUTCMonth() + direction);
		return date.getTime();
	},
	year: (timestamp, direction) => {
		const date = new Date(timestamp);
		date.setUTCFullYear(date.getUTCFullYear() + direction);
		return date.getTime();
	},
};

export function each(
	range: {
		start: TheDate;
		end: TheDate;
	},
	unit: Unit = "day",
) {
	const startTimestamp = toTimestamp(range.start);
	const endTimestamp = toTimestamp(range.end);

	const direction: 1 | -1 = startTimestamp <= endTimestamp ? 1 : -1;
	const advanceTimestamp = stepMapper[unit];

	return loop<TheDate, TheDate>(({
		exit,
		next,
		previousOutput,
	}) => {
		if (!previousOutput) {
			return next(range.start);
		}

		const currentTimestamp = advanceTimestamp(
			toTimestamp(previousOutput),
			direction,
		);

		const isWithinRange = direction === 1
			? currentTimestamp <= endTimestamp
			: currentTimestamp >= endTimestamp;

		if (!isWithinRange) {
			return exit(
				currentTimestamp === endTimestamp
					? createOrThrow(currentTimestamp)
					: undefined,
			);
		}

		return next(createOrThrow(currentTimestamp));
	});
}
