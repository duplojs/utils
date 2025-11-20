import { toTimestamp } from "./toTimestamp";
import type { TheDate } from "./types";

interface ClosestToParams {
	tieBreaker?: "favorPast" | "favorFuture";
}

export function closestTo<
	GenericIterable extends Iterable<TheDate>,
>(
	target: TheDate,
	params?: ClosestToParams,
): (input: GenericIterable) => TheDate | undefined;

export function closestTo<
	GenericIterable extends Iterable<TheDate>,
>(
	input: GenericIterable,
	target: TheDate,
	params?: ClosestToParams,
): TheDate | undefined;

export function closestTo(...args: [TheDate, ClosestToParams?] | [Iterable<TheDate>, TheDate, ClosestToParams?]) {
	if (typeof args[0] === "string") {
		const [target, params] = args as [TheDate, ClosestToParams?];
		return (input: Iterable<TheDate>) => closestTo(input, target, params);
	}

	const [input, target, params] = args as [Iterable<TheDate>, TheDate, ClosestToParams?];
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
			closest = value;
		}
	}

	return closest;
}
