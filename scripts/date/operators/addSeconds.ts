import { millisecondsInOneSecond } from "../constants";
import { createTheDate } from "../createTheDate";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

/**
 * {@include date/addSeconds/index.md}
 */
export function addSeconds<
	GenericInput extends TheDate,
	GenericSecond extends number,
>(
	second: GenericSecond,
): (input: GenericInput) => TheDate;

export function addSeconds<
	GenericInput extends TheDate,
	GenericSecond extends number,
>(
	input: GenericInput,
	second: GenericSecond,
): TheDate;

export function addSeconds(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [second] = args;
		return (input: TheDate) => addSeconds(input, second);
	}

	const [input, second] = args;

	const date = toNative(input);
	date.setTime(date.getTime() + (second * millisecondsInOneSecond));

	return createTheDate(date.getTime());
}
