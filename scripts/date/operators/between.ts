import { toTimestamp } from "../toTimestamp";
import type { TheDate } from "../types";

/**
 * {@include date/between/index.md}
 */
export function between<
	GenericValue extends TheDate,
>(
	greater: TheDate,
	less: TheDate,
): (input: GenericValue) => boolean;

export function between<
	GenericValue extends TheDate,
>(
	input: GenericValue,
	greater: TheDate,
	less: TheDate,
): boolean;

export function between(...args: [TheDate, TheDate] | [TheDate, TheDate, TheDate]) {
	if (args.length === 2) {
		const [greater, less] = args;
		return (input: TheDate) => between(input, greater, less);
	}

	const [input, greater, less] = args;

	const inputTimestamp = toTimestamp(input);
	const greaterTimestamp = toTimestamp(greater);
	const lessTimestamp = toTimestamp(less);

	return inputTimestamp >= greaterTimestamp && inputTimestamp <= lessTimestamp;
}
