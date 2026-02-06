import { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/subtractMilliseconds/index.md}
 */
export function subtractMilliseconds<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMillisecond extends number,
>(
	millisecond: GenericMillisecond,
): (input: GenericInput) => TheDate;

export function subtractMilliseconds<
	GenericInput extends TheDate | SerializedTheDate,
	GenericMillisecond extends number,
>(
	input: GenericInput,
	millisecond: GenericMillisecond,
): TheDate;

export function subtractMilliseconds(
	...args: [TheDate | SerializedTheDate, number] | [number]
) {
	if (args.length === 1) {
		const [millisecond] = args;
		return (input: TheDate | SerializedTheDate) => subtractMilliseconds(input, millisecond);
	}

	const [input, millisecond] = args;

	return TheDate.new(toTimestamp(input) - millisecond);
}
