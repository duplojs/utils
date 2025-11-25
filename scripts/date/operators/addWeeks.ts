import { millisecondInOneWeek } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function addWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number,
>(
	week: PositiveNumber<GenericWeek>,
): (input: GenericInput) => TheDate;

export function addWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number,
>(
	input: GenericInput,
	week: PositiveNumber<GenericWeek>,
): TheDate;

export function addWeeks(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [week] = args;
		return (input: TheDate) => addWeeks(input, week);
	}

	const [input, week] = args;
	const absoluteWeek = Math.abs(week);

	const date = toNative(input);
	date.setTime(date.getTime() + (absoluteWeek * millisecondInOneWeek));
	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
