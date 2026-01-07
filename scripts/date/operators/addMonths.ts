import { createTheDate } from "../createTheDate";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

export function addMonths<
	GenericInput extends TheDate,
	GenericMonth extends number,
>(
	month: GenericMonth,
): (input: GenericInput) => TheDate;

export function addMonths<
	GenericInput extends TheDate,
	GenericMonth extends number,
>(
	input: GenericInput,
	month: GenericMonth,
): TheDate;

export function addMonths(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [month] = args;
		return (input: TheDate) => addMonths(input, month);
	}

	const [input, month] = args;

	const date = toNative(input);
	date.setUTCMonth(date.getUTCMonth() + month);

	return createTheDate(date.getTime());
}
