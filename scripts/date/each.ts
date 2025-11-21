import { loop } from "@scripts/generator/loop";
import { millisecondsInOneSecond, millisecondInOneMinute, millisecondInOneHour, millisecondsInOneDay } from "./constants";
import type { TheDate, Unit } from "./types";
import { toTimestamp } from "./toTimestamp";

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

function toTheDate(timestamp: number) {
	const isNegative = timestamp < 0;
	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}

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

	function isWithinRange(timestamp: number) {
		return direction === 1
			? timestamp <= endTimestamp
			: timestamp >= endTimestamp;
	}

	let currentTimestamp = startTimestamp;

	return loop<TheDate, TheDate>(({
		count,
		exit,
		next,
	}) => {
		if (count === 0) {
			const initial = toTheDate(currentTimestamp);

			if (currentTimestamp === endTimestamp) {
				return exit(initial);
			}

			currentTimestamp = advanceTimestamp(currentTimestamp, direction);

			return next(initial);
		}

		if (!isWithinRange(currentTimestamp)) {
			return exit();
		}

		const currentDate = toTheDate(currentTimestamp);

		if (currentTimestamp === endTimestamp) {
			return exit(currentDate);
		}

		currentTimestamp = advanceTimestamp(currentTimestamp, direction);

		return next(currentDate);
	});
}
