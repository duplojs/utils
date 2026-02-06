import type { TheTime } from "../theTime";
import { toTimeValue } from "../toTimeValue";
import type { SerializedTheTime } from "../types";

/**
 * {@include date/betweenThanTime/index.md}
 */
export function betweenThanTime<
	GenericValue extends TheTime | SerializedTheTime,
>(
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime,
): (input: GenericValue) => boolean;

export function betweenThanTime<
	GenericValue extends TheTime | SerializedTheTime,
>(
	input: GenericValue,
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime,
): boolean;

export function betweenThanTime(
	...args:
	| [TheTime | SerializedTheTime, TheTime | SerializedTheTime]
	| [TheTime | SerializedTheTime, TheTime | SerializedTheTime, TheTime | SerializedTheTime]
) {
	if (args.length === 2) {
		const [greater, less] = args;
		return (input: TheTime | SerializedTheTime) => betweenThanTime(input, greater, less);
	}

	const [input, greater, less] = args;

	const inputTimestamp = toTimeValue(input);
	const greaterTimestamp = toTimeValue(greater);
	const lessTimestamp = toTimeValue(less);

	return inputTimestamp > greaterTimestamp && inputTimestamp < lessTimestamp;
}
