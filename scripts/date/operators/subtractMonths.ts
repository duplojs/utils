import { TheDate } from "../theDate";
import { toNative } from "../toNative";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/subtractMonths/index.md}
 */
export function subtractMonths<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMonth extends number,
>(
	month: GenericMonth,
): (input: GenericInput) => TheDate;

export function subtractMonths<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMonth extends number,
>(
	input: GenericInput,
	month: GenericMonth,
): TheDate;

export function subtractMonths(...args: [TheDate | SerializedTheDate, number] | [number]) {
	if (args.length === 1) {
		const [month] = args;
		return (input: TheDate | SerializedTheDate) => subtractMonths(input, month);
	}

	const [input, month] = args;

	const date = toNative(input);
	date.setUTCMonth(date.getUTCMonth() - month);

	return TheDate.new(date.getTime());
}
