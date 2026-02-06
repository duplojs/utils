import { millisecondInOneHour } from "../constants";
import { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/addHours/index.md}
 */
export function addHours<
	GenericInput extends TheDate | SerializedTheDate,
	GenericHour extends number,
>(
	hour: GenericHour,
): (input: GenericInput) => TheDate;

export function addHours<
	GenericInput extends TheDate | SerializedTheDate,
	GenericHour extends number,
>(
	input: GenericInput,
	hour: GenericHour,
): TheDate;

export function addHours(...args: [TheDate | SerializedTheDate, number] | [number]) {
	if (args.length === 1) {
		const [hour] = args;
		return (input: TheDate | SerializedTheDate) => addHours(input, hour);
	}

	const [input, hour] = args;

	return TheDate.new(toTimestamp(input) + (hour * millisecondInOneHour));
}
