import { millisecondsInOneDay } from "../constants";
import { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/addDays/index.md}
 */
export function addDays<
	GenericInput extends TheDate | SerializedTheDate,
	GenericDay extends number,
>(
	day: GenericDay,
): (input: GenericInput) => TheDate;

export function addDays<
	GenericInput extends TheDate | SerializedTheDate,
	GenericDay extends number,
>(
	input: GenericInput,
	day: GenericDay,
): TheDate;

export function addDays(...args: [TheDate | SerializedTheDate, number] | [number]) {
	if (args.length === 1) {
		const [day] = args;
		return (input: TheDate | SerializedTheDate) => addDays(input, day);
	}

	const [input, day] = args;

	return TheDate.new(toTimestamp(input) + (day * millisecondsInOneDay));
}
