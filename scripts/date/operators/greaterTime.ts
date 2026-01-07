import { toTimeValue } from "../toTimeValue";
import type { TheTime } from "../types";

/**
 * {@include date/greaterTime/index.md}
 */
export function greaterTime<
	GenericValue extends TheTime,
>(threshold: TheTime): (input: GenericValue) => boolean;

export function greaterTime<
	GenericValue extends TheTime,
>(input: GenericValue, threshold: TheTime): boolean;

export function greaterTime(...args: [TheTime] | [TheTime, TheTime]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheTime) => greaterTime(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimeValue(input);
	const thresholdTimestamp = toTimeValue(threshold);

	return inputTimestamp >= thresholdTimestamp;
}
