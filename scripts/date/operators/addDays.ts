import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";
import { millisecondsInOneDay } from "../constants";

export function addDays<
	GenericInput extends TheDate,
	GenericDay extends number,
>(
	day: PositiveNumber<GenericDay>,
): (input: GenericInput) => TheDate;

export function addDays<
	GenericInput extends TheDate,
	GenericDay extends number,
>(
	input: GenericInput,
	day: PositiveNumber<GenericDay>,
): TheDate;

export function addDays(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [day] = args;
		return (input: TheDate) => addDays(input, day);
	}

	const [input, day] = args;
	const absoluteDay = Math.abs(day);

	const date = toNative(input);
	date.setTime(date.getTime() + (absoluteDay * millisecondsInOneDay));
	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
