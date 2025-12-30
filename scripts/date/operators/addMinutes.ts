import { millisecondInOneMinute } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

export function addMinutes<
	GenericInput extends TheDate,
	GenericMinute extends number,
>(
	minute: GenericMinute,
): (input: GenericInput) => TheDate;

export function addMinutes<
	GenericInput extends TheDate,
	GenericMinute extends number,
>(
	input: GenericInput,
	minute: GenericMinute,
): TheDate;

export function addMinutes(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [minute] = args;
		return (input: TheDate) => addMinutes(input, minute);
	}

	const [input, minute] = args;

	const date = toNative(input);
	date.setTime(date.getTime() + (minute * millisecondInOneMinute));

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
