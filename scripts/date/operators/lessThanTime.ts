import { toTimestamp } from "../toTimestamp";
import type { TheTime } from "../types";

export function lessThanTime<
	GenericValue extends TheTime,
>(threshold: TheTime): (input: GenericValue) => boolean;

export function lessThanTime<
	GenericValue extends TheTime,
>(input: GenericValue, threshold: TheTime): boolean;

export function lessThanTime(...args: [TheTime] | [TheTime, TheTime]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheTime) => lessThanTime(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimestamp(input);
	const thresholdTimestamp = toTimestamp(threshold);

	return inputTimestamp < thresholdTimestamp;
}
