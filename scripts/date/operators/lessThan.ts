import { toTimestamp } from "../toTimestamp";
import type { TheDate } from "../types";

/**
 * {@include date/lessThan/index.md}
 */
export function lessThan<
	GenericValue extends TheDate,
>(threshold: TheDate): (input: GenericValue) => boolean;

export function lessThan<
	GenericValue extends TheDate,
>(input: GenericValue, threshold: TheDate): boolean;

export function lessThan(...args: [TheDate] | [TheDate, TheDate]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheDate) => lessThan(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimestamp(input);
	const thresholdTimestamp = toTimestamp(threshold);

	return inputTimestamp < thresholdTimestamp;
}
