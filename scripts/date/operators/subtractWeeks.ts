import { millisecondInOneWeek } from "../constants";
import { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/subtractWeeks/index.md}
 */
export function subtractWeeks<
	GenericInput extends TheDate | SerializedTheDate,
	GenericWeek extends number,
>(
	week: GenericWeek,
): (input: GenericInput) => TheDate;

export function subtractWeeks<
	GenericInput extends TheDate | SerializedTheDate,
	GenericWeek extends number,
>(
	input: GenericInput,
	week: GenericWeek,
): TheDate;

export function subtractWeeks(
	...args: [TheDate | SerializedTheDate, number] | [number]
) {
	if (args.length === 1) {
		const [week] = args;
		return (input: TheDate | SerializedTheDate) => subtractWeeks(input, week);
	}

	const [input, week] = args;

	return TheDate.new(toTimestamp(input) - (week * millisecondInOneWeek));
}
