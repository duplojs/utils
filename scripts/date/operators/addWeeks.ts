import { millisecondInOneWeek } from "../constants";
import { createTheDate } from "../createTheDate";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

export function addWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number,
>(
	week: GenericWeek,
): (input: GenericInput) => TheDate;

export function addWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number,
>(
	input: GenericInput,
	week: GenericWeek,
): TheDate;

export function addWeeks(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [week] = args;
		return (input: TheDate) => addWeeks(input, week);
	}

	const [input, week] = args;

	const date = toNative(input);
	date.setTime(date.getTime() + (week * millisecondInOneWeek));
	return createTheDate(date.getTime());
}
