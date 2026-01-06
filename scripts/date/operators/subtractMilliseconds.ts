import { createTheDate } from "../createTheDate";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

export function subtractMilliseconds<
	GenericInput extends TheDate,
	GenericMillisecond extends number,
>(
	millisecond: GenericMillisecond,
): (input: GenericInput) => TheDate;

export function subtractMilliseconds<
	GenericInput extends TheDate,
	GenericMillisecond extends number,
>(
	input: GenericInput,
	millisecond: GenericMillisecond,
): TheDate;

export function subtractMilliseconds(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [millisecond] = args;
		return (input: TheDate) => subtractMilliseconds(input, millisecond);
	}

	const [input, millisecond] = args;

	const date = toNative(input);
	date.setTime(date.getTime() - millisecond);

	return createTheDate(date.getTime());
}
