import { type TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import { type SerializedTheDate } from "../types";

/**
 * {@include date/between/index.md}
 */
export function between<
	GenericValue extends TheDate | SerializedTheDate,
>(
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate,
): (input: GenericValue) => boolean;

export function between<
	GenericValue extends TheDate | SerializedTheDate,
>(
	input: GenericValue,
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate,
): boolean;

export function between(
	...args:
	| [TheDate | SerializedTheDate, TheDate | SerializedTheDate]
	| [TheDate | SerializedTheDate, TheDate | SerializedTheDate, TheDate | SerializedTheDate]
) {
	if (args.length === 2) {
		const [greater, less] = args;
		return (input: TheDate | SerializedTheDate) => between(input, greater, less);
	}

	const [input, greater, less] = args;

	const inputTimestamp = toTimestamp(input);
	const greaterTimestamp = toTimestamp(greater);
	const lessTimestamp = toTimestamp(less);

	return inputTimestamp >= greaterTimestamp && inputTimestamp <= lessTimestamp;
}
