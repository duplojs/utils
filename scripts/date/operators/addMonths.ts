import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function addMonths<
	GenericInput extends TheDate,
	GenericMonth extends number,
>(
	month: PositiveNumber<GenericMonth>,
): (input: GenericInput) => TheDate;

export function addMonths<
	GenericInput extends TheDate,
	GenericMonth extends number,
>(
	input: GenericInput,
	month: PositiveNumber<GenericMonth>,
): TheDate;

export function addMonths(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [month] = args;
		return (input: TheDate) => addMonths(input, month);
	}

	const [input, month] = args;
	const absoluteMonth = Math.abs(month);

	const date = toNative(input);
	date.setUTCMonth(date.getUTCMonth() + absoluteMonth);

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
