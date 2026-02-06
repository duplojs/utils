import { TheDate } from "./theDate";
import { toTimestamp } from "./toTimestamp";
import type { SerializedTheDate } from "./types";

interface ClosestToParams {
	tieBreaker?: "favorPast" | "favorFuture";
}

/**
 * {@include date/closestTo/index.md}
 */
export function closestTo<
	GenericIterable extends Iterable<TheDate | SerializedTheDate>,
>(
	target: TheDate | SerializedTheDate,
	params?: ClosestToParams,
): (input: GenericIterable) => TheDate | undefined;

export function closestTo<
	GenericIterable extends Iterable<TheDate | SerializedTheDate>,
>(
	input: GenericIterable,
	target: TheDate | SerializedTheDate,
	params?: ClosestToParams,
): TheDate | undefined;

export function closestTo(
	...args: [TheDate | SerializedTheDate, ClosestToParams?]
	| [Iterable<TheDate | SerializedTheDate>, TheDate | SerializedTheDate, ClosestToParams?]
) {
	if (typeof args[0] === "string" || args[0] instanceof TheDate) {
		const [target, params] = args as [TheDate | SerializedTheDate, ClosestToParams?];
		return (input: Iterable<TheDate | SerializedTheDate>) => closestTo(input, target, params);
	}

	const [input, target, params] = args as [
		Iterable<TheDate | SerializedTheDate>,
		TheDate | SerializedTheDate,
		ClosestToParams?,
	];

	const { tieBreaker } = params ?? {};

	const targetTimestamp = toTimestamp(target);

	let closest: TheDate | undefined = undefined;
	let smallestDiff = Number.POSITIVE_INFINITY;

	for (const value of input) {
		const valueTimestamp = toTimestamp(value);
		if (tieBreaker === "favorPast" && valueTimestamp > targetTimestamp) {
			continue;
		}

		if (tieBreaker === "favorFuture" && valueTimestamp < targetTimestamp) {
			continue;
		}

		const distance = Math.abs(valueTimestamp - targetTimestamp);

		if (distance < smallestDiff) {
			smallestDiff = distance;
			if (value instanceof TheDate) {
				closest = value;
			}
			closest = TheDate.new(valueTimestamp);
		}
	}

	return closest;
}
