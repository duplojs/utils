import { millisecondsInOneSecond } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function subtractSeconds<
	GenericInput extends TheDate,
	GenericSecond extends number,
>(
	second: PositiveNumber<GenericSecond>,
): (input: GenericInput) => TheDate;

export function subtractSeconds<
	GenericInput extends TheDate,
	GenericSecond extends number,
>(
	input: GenericInput,
	second: PositiveNumber<GenericSecond>,
): TheDate;

export function subtractSeconds(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [second] = args;
		return (input: TheDate) => subtractSeconds(input, second);
	}

	const [input, second] = args;

	const date = toNative(input);
	const absoluteSecond = Math.abs(second);
	date.setTime(date.getTime() - (absoluteSecond * millisecondsInOneSecond));

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
