import { createTheDate } from "../createTheDate";
import { createTheTime } from "../createTheTime";
import { theTimeRegex } from "../constants";
import { toTimestamp } from "../toTimestamp";
import type { TheDate, TheTime } from "../types";
import { is } from "../is";

function timeToTimestamp(input: TheTime) {
	const match = input.match(theTimeRegex);
	const { value, sign } = match!.groups as Record<"value" | "sign", string>;

	return Number(sign === "-" ? `-${value}` : value);
}

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
	const timeTimestamp = timeToTimestamp(time);

	if (is(input)) {
		return createTheDate(toTimestamp(input) + timeTimestamp);
	}

	return createTheTime(timeToTimestamp(input) + timeTimestamp);
}
