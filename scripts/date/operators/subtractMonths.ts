import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function subtractMonths<
	GenericInput extends TheDate,
	GenericMonth extends number,
>(
	month: PositiveNumber<GenericMonth>,
): (input: GenericInput) => TheDate;

export function subtractMonths<
	GenericInput extends TheDate,
	GenericMonth extends number,
>(
	input: GenericInput,
	month: PositiveNumber<GenericMonth>,
): TheDate;

export function subtractMonths(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [month] = args;
		return (input: TheDate) => subtractMonths(input, month);
	}

	const [input, month] = args;

	const date = toNative(input);
	const absoluteMonth = Math.abs(month);
	date.setUTCMonth(date.getUTCMonth() - absoluteMonth);

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
