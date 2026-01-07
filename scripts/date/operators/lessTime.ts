import { toTimeValue } from "../toTimeValue";
import type { TheTime } from "../types";

export function lessTime<
	GenericValue extends TheTime,
>(threshold: TheTime): (input: GenericValue) => boolean;

export function lessTime<
	GenericValue extends TheTime,
>(input: GenericValue, threshold: TheTime): boolean;

export function lessTime(...args: [TheTime] | [TheTime, TheTime]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (input: TheTime) => lessTime(input, threshold);
	}

	const [input, threshold] = args;

	const inputTimestamp = toTimeValue(input);
	const thresholdTimestamp = toTimeValue(threshold);

	return inputTimestamp <= thresholdTimestamp;
}
