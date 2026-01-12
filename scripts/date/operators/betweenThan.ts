import { toTimestamp } from "../toTimestamp";
import type { TheDate } from "../types";

/**
 * {@include date/betweenThan/index.md}
 */
export function betweenThan<
	GenericValue extends TheDate,
>(
	greater: TheDate,
	less: TheDate,
): (input: GenericValue) => boolean;

export function betweenThan<
	GenericValue extends TheDate,
>(
	input: GenericValue,
	greater: TheDate,
	less: TheDate,
): boolean;

export function betweenThan(...args: [TheDate, TheDate] | [TheDate, TheDate, TheDate]) {
	if (args.length === 2) {
		const [greater, less] = args;
		return (input: TheDate) => betweenThan(input, greater, less);
	}

	const [input, greater, less] = args;

	const inputTimestamp = toTimestamp(input);
	const greaterTimestamp = toTimestamp(greater);
	const lessTimestamp = toTimestamp(less);

	return inputTimestamp > greaterTimestamp && inputTimestamp < lessTimestamp;
}
