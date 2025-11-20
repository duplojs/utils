import { millisecondInOneMinute } from "../constants";
import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function subtractMinutes<
	GenericInput extends TheDate,
	GenericMinute extends number,
>(
	minute: PositiveNumber<GenericMinute>,
): (input: GenericInput) => TheDate;

export function subtractMinutes<
	GenericInput extends TheDate,
	GenericMinute extends number,
>(
	input: GenericInput,
	minute: PositiveNumber<GenericMinute>,
): TheDate;

export function subtractMinutes(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [minute] = args;
		return (input: TheDate) => subtractMinutes(input, minute);
	}

	const [input, minute] = args;

	const date = toNative(input);
	const absoluteMinute = Math.abs(minute);
	date.setTime(date.getTime() - (absoluteMinute * millisecondInOneMinute));

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
