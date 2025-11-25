import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function subtractMilliseconds<
	GenericInput extends TheDate,
	GenericMillisecond extends number,
>(
	millisecond: PositiveNumber<GenericMillisecond>,
): (input: GenericInput) => TheDate;

export function subtractMilliseconds<
	GenericInput extends TheDate,
	GenericMillisecond extends number,
>(
	input: GenericInput,
	millisecond: PositiveNumber<GenericMillisecond>,
): TheDate;

export function subtractMilliseconds(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [millisecond] = args;
		return (input: TheDate) => subtractMilliseconds(input, millisecond);
	}

	const [input, millisecond] = args;

	const date = toNative(input);
	const absoluteMillisecond = Math.abs(millisecond);
	date.setTime(date.getTime() - absoluteMillisecond);

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
