import { millisecondInOneHour } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function addHours<
	GenericInput extends TheDate,
	GenericHour extends number,
>(
	hour: PositiveNumber<GenericHour>,
): (input: GenericInput) => TheDate;

export function addHours<
	GenericInput extends TheDate,
	GenericHour extends number,
>(
	input: GenericInput,
	hour: PositiveNumber<GenericHour>,
): TheDate;

export function addHours(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [hour] = args;
		return (input: TheDate) => addHours(input, hour);
	}

	const [input, hour] = args;
	const absoluteHour = Math.abs(hour);

	const date = toNative(input);
	date.setTime(date.getTime() + (absoluteHour * millisecondInOneHour));

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
