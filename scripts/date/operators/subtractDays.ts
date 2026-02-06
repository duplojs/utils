import { millisecondsInOneDay } from "../constants";
import { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/subtractDays/index.md}
 */
export function subtractDays<
	GenericInput extends TheDate | SerializedTheDate,
	GenericDay extends number,
>(
	day: GenericDay,
): (input: GenericInput) => TheDate;

export function subtractDays<
	GenericInput extends TheDate | SerializedTheDate,
	GenericDay extends number,
>(
	input: GenericInput,
	day: GenericDay,
): TheDate;

export function subtractDays(...args: [TheDate | SerializedTheDate, number] | [number]) {
	if (args.length === 1) {
		const [day] = args;
		return (input: TheDate | SerializedTheDate) => subtractDays(input, day);
	}

	const [input, day] = args;

	return TheDate.new(toTimestamp(input) - (day * millisecondsInOneDay));
}
