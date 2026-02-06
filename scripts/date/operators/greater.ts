import type { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/greater/index.md}
 */
export function greater<
	GenericValue extends TheDate | SerializedTheDate,
>(threshold: TheDate | SerializedTheDate): (input: GenericValue) => boolean;

export function greater<
	GenericValue extends TheDate | SerializedTheDate,
>(input: GenericValue, threshold: TheDate | SerializedTheDate): boolean;

export function greater(
	...args:
	| [TheDate | SerializedTheDate]
	| [TheDate | SerializedTheDate, TheDate | SerializedTheDate]
) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheDate | SerializedTheDate) => greater(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimestamp(input);
	const thresholdTimestamp = toTimestamp(threshold);

	return inputTimestamp >= thresholdTimestamp;
}
