import { TheDate } from "../theDate";
import { toNative } from "../toNative";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/addMonths/index.md}
 */
export function addMonths<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMonth extends number,
>(
	month: GenericMonth,
): (input: GenericInput) => TheDate;

export function addMonths<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMonth extends number,
>(
	input: GenericInput,
	month: GenericMonth,
): TheDate;

export function addMonths(...args: [TheDate | SerializedTheDate, number] | [number]) {
	if (args.length === 1) {
		const [month] = args;
		return (input: TheDate | SerializedTheDate) => addMonths(input, month);
	}

	const [input, month] = args;

	const date = toNative(input);

	date.setUTCMonth(date.getUTCMonth() + month);

	return TheDate.new(date.getTime());
}
