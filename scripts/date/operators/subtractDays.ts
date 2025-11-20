import { millisecondsInOneDay } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function subtractDays<
	GenericInput extends TheDate,
	GenericDay extends number,
>(
	day: PositiveNumber<GenericDay>,
): (input: GenericInput) => TheDate;

export function subtractDays<
	GenericInput extends TheDate,
	GenericDay extends number,
>(
	input: GenericInput,
	day: PositiveNumber<GenericDay>,
): TheDate;

export function subtractDays(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [day] = args;
		return (input: TheDate) => subtractDays(input, day);
	}

	const [input, day] = args;

	const date = toNative(input);
	const absoluteDay = Math.abs(day);
	date.setTime(date.getTime() - (absoluteDay * millisecondsInOneDay));

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
