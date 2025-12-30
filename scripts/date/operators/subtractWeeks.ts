import { millisecondInOneWeek } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

export function subtractWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number,
>(
	week: GenericWeek,
): (input: GenericInput) => TheDate;

export function subtractWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number,
>(
	input: GenericInput,
	week: GenericWeek,
): TheDate;

export function subtractWeeks(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [week] = args;
		return (input: TheDate) => subtractWeeks(input, week);
	}

	const [input, week] = args;

	const date = toNative(input);
	date.setTime(date.getTime() - (week * millisecondInOneWeek));

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
