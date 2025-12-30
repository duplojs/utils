import { toNative } from "../toNative";
import type { TheDate } from "../types";
import { millisecondsInOneDay } from "../constants";

export function addDays<
	GenericInput extends TheDate,
	GenericDay extends number,
>(
	day: GenericDay,
): (input: GenericInput) => TheDate;

export function addDays<
	GenericInput extends TheDate,
	GenericDay extends number,
>(
	input: GenericInput,
	day: GenericDay,
): TheDate;

export function addDays(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [day] = args;
		return (input: TheDate) => addDays(input, day);
	}

	const [input, day] = args;

	const date = toNative(input);
	date.setTime(date.getTime() + (day * millisecondsInOneDay));
	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
