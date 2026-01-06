import { createTheDate } from "../createTheDate";
import { createTheTime } from "../createTheTime";
import { toTimestamp } from "../toTimestamp";
import type { TheDate, TheTime } from "../types";

export function subtractTime<
	GenericInput extends TheDate,
>(
	time: TheTime,
): (input: GenericInput) => TheDate;

export function subtractTime<
	GenericInput extends TheTime,
>(
	time: TheTime,
): (input: GenericInput) => TheTime;

export function subtractTime<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	time: TheTime,
): TheDate;

export function subtractTime<
	GenericInput extends TheTime,
>(
	input: GenericInput,
	time: TheTime,
): TheTime;

export function subtractTime(
	...args: [TheDate | TheTime, TheTime] | [TheTime]
): any {
	if (args.length === 1) {
		const [time] = args;
		return (input: TheDate | TheTime) => subtractTime(input as never, time);
	}

	const [input, time] = args;
	const timeTimestamp = toTimestamp(time);

	if (input.startsWith("date")) {
		return createTheDate(toTimestamp(input) - timeTimestamp);
	}

	return createTheTime(toTimestamp(input) - timeTimestamp);
}
