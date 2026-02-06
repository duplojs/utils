import { millisecondInOneWeek } from "../constants";
import { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/addWeeks/index.md}
 */
export function addWeeks<
	GenericInput extends TheDate | SerializedTheDate,
	GenericWeek extends number,
>(
	week: GenericWeek,
): (input: GenericInput) => TheDate;

export function addWeeks<
	GenericInput extends TheDate | SerializedTheDate,
	GenericWeek extends number,
>(
	input: GenericInput,
	week: GenericWeek,
): TheDate;

export function addWeeks(...args: [TheDate | SerializedTheDate, number] | [number]) {
	if (args.length === 1) {
		const [week] = args;
		return (input: TheDate | SerializedTheDate) => addWeeks(input, week);
	}

	const [input, week] = args;

	const timestamp = input instanceof TheDate
		? input.getTime()
		: toTimestamp(input);

	return TheDate.new(timestamp + (week * millisecondInOneWeek));
}
