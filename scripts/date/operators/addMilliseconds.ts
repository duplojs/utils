import { toNative } from "../toNative";
import type { TheDate } from "../types";

export function addMilliseconds<
	GenericInput extends TheDate,
	GenericMillisecond extends number,
>(
	millisecond: GenericMillisecond,
): (input: GenericInput) => TheDate;

export function addMilliseconds<
	GenericInput extends TheDate,
	GenericMillisecond extends number,
>(
	input: GenericInput,
	millisecond: GenericMillisecond,
): TheDate;

export function addMilliseconds(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [millisecond] = args;
		return (input: TheDate) => addMilliseconds(input, millisecond);
	}

	const [input, millisecond] = args;

	const date = toNative(input);
	date.setTime(date.getTime() + millisecond);

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
