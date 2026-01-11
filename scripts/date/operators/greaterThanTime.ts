import { toTimeValue } from "../toTimeValue";
import type { TheTime } from "../types";

/**
 * {@include date/greaterThanTime/index.md}
 */
export function greaterThanTime<
	GenericValue extends TheTime,
>(threshold: TheTime): (input: GenericValue) => boolean;

export function greaterThanTime<
	GenericValue extends TheTime,
>(input: GenericValue, threshold: TheTime): boolean;

export function greaterThanTime(...args: [TheTime] | [TheTime, TheTime]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheTime) => greaterThanTime(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimeValue(input);
	const thresholdTimestamp = toTimeValue(threshold);

	return inputTimestamp > thresholdTimestamp;
}
