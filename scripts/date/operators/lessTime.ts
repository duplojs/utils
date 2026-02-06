import type { TheTime } from "../theTime";
import { toTimeValue } from "../toTimeValue";
import type { SerializedTheTime } from "../types";

/**
 * {@include date/lessTime/index.md}
 */
export function lessTime<
	GenericValue extends TheTime | SerializedTheTime,
>(
	threshold: TheTime | SerializedTheTime
): (input: GenericValue) => boolean;

export function lessTime<
	GenericValue extends TheTime | SerializedTheTime,
>(
	input: GenericValue,
	threshold: TheTime | SerializedTheTime
): boolean;

export function lessTime(
	...args:
	| [TheTime | SerializedTheTime]
	| [TheTime | SerializedTheTime, TheTime | SerializedTheTime]
) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheTime | SerializedTheTime) => lessTime(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimeValue(input);
	const thresholdTimestamp = toTimeValue(threshold);

	return inputTimestamp <= thresholdTimestamp;
}
