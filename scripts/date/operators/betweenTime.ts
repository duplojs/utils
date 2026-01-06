import { toTimestamp } from "../toTimestamp";
import type { TheTime } from "../types";

export function betweenTime<
	GenericValue extends TheTime,
>(
	greater: TheTime,
	less: TheTime,
): (input: GenericValue) => boolean;

export function betweenTime<
	GenericValue extends TheTime,
>(
	input: GenericValue,
	greater: TheTime,
	less: TheTime,
): boolean;

export function betweenTime(...args: [TheTime, TheTime] | [TheTime, TheTime, TheTime]) {
	if (args.length === 2) {
		const [greater, less] = args;
		return (input: TheTime) => betweenTime(input, greater, less);
	}

	const [input, greater, less] = args;

	const inputTimestamp = toTimestamp(input);
	const greaterTimestamp = toTimestamp(greater);
	const lessTimestamp = toTimestamp(less);

	return inputTimestamp >= greaterTimestamp && inputTimestamp <= lessTimestamp;
}
