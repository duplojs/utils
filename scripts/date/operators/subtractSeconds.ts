import { millisecondsInOneSecond } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

export function subtractSeconds<
	GenericInput extends TheDate,
	GenericSecond extends number,
>(
	second: GenericSecond,
): (input: GenericInput) => TheDate;

export function subtractSeconds<
	GenericInput extends TheDate,
	GenericSecond extends number,
>(
	input: GenericInput,
	second: GenericSecond,
): TheDate;

export function subtractSeconds(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [second] = args;
		return (input: TheDate) => subtractSeconds(input, second);
	}

	const [input, second] = args;

	const date = toNative(input);
	date.setTime(date.getTime() - (second * millisecondsInOneSecond));

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
