import { millisecondsInOneSecond } from "../constants";
import { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/subtractSeconds/index.md}
 */
export function subtractSeconds<
	GenericInput extends TheDate | SerializedTheDate,
	GenericSecond extends number,
>(
	second: GenericSecond,
): (input: GenericInput) => TheDate;

export function subtractSeconds<
	GenericInput extends TheDate | SerializedTheDate,
	GenericSecond extends number,
>(
	input: GenericInput,
	second: GenericSecond,
): TheDate;

export function subtractSeconds(...args: [TheDate | SerializedTheDate, number] | [number]) {
	if (args.length === 1) {
		const [second] = args;
		return (input: TheDate) => subtractSeconds(input, second);
	}

	const [input, second] = args;

	return TheDate.new(toTimestamp(input) - (second * millisecondsInOneSecond));
}
