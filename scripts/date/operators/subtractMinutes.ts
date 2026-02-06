import { millisecondInOneMinute } from "../constants";
import { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/subtractMinutes/index.md}
 */
export function subtractMinutes<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMinute extends number,
>(
	minute: GenericMinute,
): (input: GenericInput) => TheDate;

export function subtractMinutes<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMinute extends number,
>(
	input: GenericInput,
	minute: GenericMinute,
): TheDate;

export function subtractMinutes(
	...args: [TheDate | SerializedTheDate, number] | [number]
) {
	if (args.length === 1) {
		const [minute] = args;
		return (input: TheDate | SerializedTheDate) => subtractMinutes(input, minute);
	}

	const [input, minute] = args;

	return TheDate.new(toTimestamp(input) - (minute * millisecondInOneMinute));
}
