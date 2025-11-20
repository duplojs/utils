import { millisecondInOneHour } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function subtractHours<
	GenericInput extends TheDate,
	GenericHour extends number,
>(
	hour: PositiveNumber<GenericHour>,
): (input: GenericInput) => TheDate;

export function subtractHours<
	GenericInput extends TheDate,
	GenericHour extends number,
>(
	input: GenericInput,
	hour: PositiveNumber<GenericHour>,
): TheDate;

export function subtractHours(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [hour] = args;
		return (input: TheDate) => subtractHours(input, hour);
	}

	const [input, hour] = args;

	const date = toNative(input);
	const absoluteHour = Math.abs(hour);
	date.setTime(date.getTime() - (absoluteHour * millisecondInOneHour));

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
