import { millisecondInOneWeek } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function subtractWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number,
>(
	week: PositiveNumber<GenericWeek>,
): (input: GenericInput) => TheDate;

export function subtractWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number,
>(
	input: GenericInput,
	week: PositiveNumber<GenericWeek>,
): TheDate;

export function subtractWeeks(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [week] = args;
		return (input: TheDate) => subtractWeeks(input, week);
	}

	const [input, week] = args;

	const date = toNative(input);
	const absoluteWeek = Math.abs(week);
	date.setTime(date.getTime() - (absoluteWeek * millisecondInOneWeek));

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
