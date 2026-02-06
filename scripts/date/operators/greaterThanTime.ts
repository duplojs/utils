import type { TheTime } from "../theTime";
import { toTimeValue } from "../toTimeValue";
import type { SerializedTheTime } from "../types";

/**
 * {@include date/greaterThanTime/index.md}
 */
export function greaterThanTime<
	GenericValue extends TheTime | SerializedTheTime,
>(threshold: TheTime | SerializedTheTime): (input: GenericValue) => boolean;

export function greaterThanTime<
	GenericValue extends TheTime | SerializedTheTime,
>(input: GenericValue, threshold: TheTime | SerializedTheTime): boolean;

export function greaterThanTime(
	...args:
	| [TheTime | SerializedTheTime]
	| [TheTime | SerializedTheTime, TheTime | SerializedTheTime]
) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheTime | SerializedTheTime) => greaterThanTime(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimeValue(input);
	const thresholdTimestamp = toTimeValue(threshold);

	return inputTimestamp > thresholdTimestamp;
}
