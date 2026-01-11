import { toTimestamp } from "../toTimestamp";
import type { TheDate } from "../types";

/**
 * {@include date/less/index.md}
 */
export function less<
	GenericValue extends TheDate,
>(threshold: TheDate): (input: GenericValue) => boolean;

export function less<
	GenericValue extends TheDate,
>(input: GenericValue, threshold: TheDate): boolean;

export function less(...args: [TheDate] | [TheDate, TheDate]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheDate) => less(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimestamp(input);
	const thresholdTimestamp = toTimestamp(threshold);

	return inputTimestamp <= thresholdTimestamp;
}
