import type { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/less/index.md}
 */
export function less<
	GenericValue extends TheDate | SerializedTheDate,
>(
	threshold: TheDate | SerializedTheDate
): (input: GenericValue) => boolean;

export function less<
	GenericValue extends TheDate | SerializedTheDate,
>(
	input: GenericValue,
	threshold: TheDate | SerializedTheDate
): boolean;

export function less(
	...args:
	| [TheDate | SerializedTheDate]
	| [TheDate | SerializedTheDate, TheDate | SerializedTheDate]
) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheDate | SerializedTheDate) => less(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimestamp(input);
	const thresholdTimestamp = toTimestamp(threshold);

	return inputTimestamp <= thresholdTimestamp;
}
