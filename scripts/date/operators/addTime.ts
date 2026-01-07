import { createTheDate } from "../createTheDate";
import { createTheTime } from "../createTheTime";
import { toTimestamp } from "../toTimestamp";
import { toTimeValue } from "../toTimeValue";
import type { TheDate, TheTime } from "../types";

export function addTime<
	GenericInput extends TheDate,
>(
	time: TheTime,
): (input: GenericInput) => TheDate;

export function addTime<
	GenericInput extends TheTime,
>(
	time: TheTime,
): (input: GenericInput) => TheTime;

export function addTime<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	time: TheTime,
): TheDate;

export function addTime<
	GenericInput extends TheTime,
>(
	input: GenericInput,
	time: TheTime,
): TheTime;

export function addTime(
	...args: [TheDate | TheTime, TheTime] | [TheTime]
): any {
	if (args.length === 1) {
		const [time] = args;
		return (input: TheDate | TheTime) => addTime(input as never, time);
	}

	const [input, time] = args;
	const timeTimestamp = toTimeValue(time);

	if (input.startsWith("date")) {
		return createTheDate(toTimestamp(input as TheDate) + timeTimestamp);
	}

	return createTheTime(toTimeValue(input as TheTime) + timeTimestamp);
}
