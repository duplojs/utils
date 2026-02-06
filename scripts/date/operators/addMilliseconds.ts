import { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/addMilliseconds/index.md}
 */
export function addMilliseconds<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMillisecond extends number,
>(
	millisecond: GenericMillisecond,
): (input: GenericInput) => TheDate;

export function addMilliseconds<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMillisecond extends number,
>(
	input: GenericInput,
	millisecond: GenericMillisecond,
): TheDate;

export function addMilliseconds(...args: [TheDate | SerializedTheDate, number] | [number]) {
	if (args.length === 1) {
		const [millisecond] = args;
		return (input: TheDate | SerializedTheDate) => addMilliseconds(input, millisecond);
	}

	const [input, millisecond] = args;

	return TheDate.new(toTimestamp(input) + millisecond);
}
