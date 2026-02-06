import type { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/betweenThan/index.md}
 */
export function betweenThan<
	GenericValue extends TheDate | SerializedTheDate,
>(
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate,
): (input: GenericValue) => boolean;

export function betweenThan<
	GenericValue extends TheDate | SerializedTheDate,
>(
	input: GenericValue,
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate,
): boolean;

export function betweenThan(
	...args:
	| [TheDate | SerializedTheDate, TheDate | SerializedTheDate]
	| [TheDate | SerializedTheDate, TheDate | SerializedTheDate, TheDate | SerializedTheDate]
) {
	if (args.length === 2) {
		const [greater, less] = args;
		return (input: TheDate | SerializedTheDate) => betweenThan(input, greater, less);
	}

	const [input, greater, less] = args;

	const inputTimestamp = toTimestamp(input);
	const greaterTimestamp = toTimestamp(greater);
	const lessTimestamp = toTimestamp(less);

	return inputTimestamp > greaterTimestamp && inputTimestamp < lessTimestamp;
}
