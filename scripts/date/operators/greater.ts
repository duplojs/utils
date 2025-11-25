import { toTimestamp } from "../toTimestamp";
import type { TheDate } from "../types";

export function greater<
	GenericValue extends TheDate,
>(threshold: TheDate): (input: GenericValue) => boolean;

export function greater<
	GenericValue extends TheDate,
>(input: GenericValue, threshold: TheDate): boolean;

export function greater(...args: [TheDate] | [TheDate, TheDate]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheDate) => greater(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimestamp(input);
	const thresholdTimestamp = toTimestamp(threshold);

	return inputTimestamp >= thresholdTimestamp;
}
