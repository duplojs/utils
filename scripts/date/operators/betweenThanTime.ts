import { toTimeValue } from "../toTimeValue";
import type { TheTime } from "../types";

/**
 * {@include date/betweenThanTime/index.md}
 */
export function betweenThanTime<
	GenericValue extends TheTime,
>(
	greater: TheTime,
	less: TheTime,
): (input: GenericValue) => boolean;

export function betweenThanTime<
	GenericValue extends TheTime,
>(
	input: GenericValue,
	greater: TheTime,
	less: TheTime,
): boolean;

export function betweenThanTime(...args: [TheTime, TheTime] | [TheTime, TheTime, TheTime]) {
	if (args.length === 2) {
		const [greater, less] = args;
		return (input: TheTime) => betweenThanTime(input, greater, less);
	}

	const [input, greater, less] = args;

	const inputTimestamp = toTimeValue(input);
	const greaterTimestamp = toTimeValue(greater);
	const lessTimestamp = toTimeValue(less);

	return inputTimestamp > greaterTimestamp && inputTimestamp < lessTimestamp;
}
