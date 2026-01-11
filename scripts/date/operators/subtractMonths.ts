import { createTheDate } from "../createTheDate";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

/**
 * {@include date/subtractMonths/index.md}
 */
export function subtractMonths<
	GenericInput extends TheDate,
	GenericMonth extends number,
>(
	month: GenericMonth,
): (input: GenericInput) => TheDate;

export function subtractMonths<
	GenericInput extends TheDate,
	GenericMonth extends number,
>(
	input: GenericInput,
	month: GenericMonth,
): TheDate;

export function subtractMonths(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [month] = args;
		return (input: TheDate) => subtractMonths(input, month);
	}

	const [input, month] = args;

	const date = toNative(input);
	date.setUTCMonth(date.getUTCMonth() - month);

	return createTheDate(date.getTime());
}
