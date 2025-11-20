import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function addMilliseconds<
	GenericInput extends TheDate,
	GenericMillisecond extends number,
>(
	millisecond: PositiveNumber<GenericMillisecond>,
): (input: GenericInput) => TheDate;

export function addMilliseconds<
	GenericInput extends TheDate,
	GenericMillisecond extends number,
>(
	input: GenericInput,
	millisecond: PositiveNumber<GenericMillisecond>,
): TheDate;

export function addMilliseconds(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [millisecond] = args;
		return (input: TheDate) => addMilliseconds(input, millisecond);
	}

	const [input, millisecond] = args;
	const absoluteMilliseconds = Math.abs(millisecond);

	const date = toNative(input);
	date.setTime(date.getTime() + absoluteMilliseconds);

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
