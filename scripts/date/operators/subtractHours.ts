import { millisecondInOneHour } from "../constants";
import { createTheDate } from "../createTheDate";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

/**
 * {@include date/subtractHours/index.md}
 */
export function subtractHours<
	GenericInput extends TheDate,
	GenericHour extends number,
>(
	hour: GenericHour,
): (input: GenericInput) => TheDate;

export function subtractHours<
	GenericInput extends TheDate,
	GenericHour extends number,
>(
	input: GenericInput,
	hour: GenericHour,
): TheDate;

export function subtractHours(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [hour] = args;
		return (input: TheDate) => subtractHours(input, hour);
	}

	const [input, hour] = args;

	const date = toNative(input);
	date.setTime(date.getTime() - (hour * millisecondInOneHour));

	return createTheDate(date.getTime());
}
