import { millisecondInOneHour } from "../constants";
import { createTheDate } from "../createTheDate";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

export function addHours<
	GenericInput extends TheDate,
	GenericHour extends number,
>(
	hour: GenericHour,
): (input: GenericInput) => TheDate;

export function addHours<
	GenericInput extends TheDate,
	GenericHour extends number,
>(
	input: GenericInput,
	hour: GenericHour,
): TheDate;

export function addHours(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [hour] = args;
		return (input: TheDate) => addHours(input, hour);
	}

	const [input, hour] = args;

	const date = toNative(input);
	date.setTime(date.getTime() + (hour * millisecondInOneHour));

	return createTheDate(date.getTime());
}
