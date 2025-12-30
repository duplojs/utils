import { millisecondInOneHour } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

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

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
