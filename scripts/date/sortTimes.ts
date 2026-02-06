import type { SortType } from "@scripts/common/types/sortType";
import { toTimeValue } from "./toTimeValue";
import { TheTime } from "./theTime";
import type { SerializedTheTime } from "./types/serializedTheTime";

/**
 * {@include date/sortTimes/index.md}
 */
export function sortTimes<
	GenericArray extends readonly (TheTime | SerializedTheTime)[],
>(
	type: SortType
): (array: GenericArray) => TheTime[];

export function sortTimes<
	GenericArray extends readonly (TheTime | SerializedTheTime)[],
>(
	array: GenericArray,
	type: SortType
): TheTime[];

export function sortTimes(...args: [readonly (TheTime | SerializedTheTime)[], SortType] | [SortType]) {
	if (args.length === 1) {
		const [type] = args;

		return (array: readonly (TheTime | SerializedTheTime)[]) => sortTimes(array, type);
	}

	const [array, type] = args;

	return array
		.map(toTimeValue)
		.sort(
			type === "DSC"
				? (first, second) => second - first
				: (first, second) => first - second,
		)
		.map(TheTime.new);
}
