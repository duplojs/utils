import type { SortType } from "@scripts/common/types/sortType";
import { toTimestamp } from "./toTimestamp";
import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";

/**
 * {@include date/sort/index.md}
 */
export function sort<
	GenericArray extends readonly (TheDate | SerializedTheDate)[],
>(
	type: SortType
): (array: GenericArray) => TheDate[];

export function sort<
	GenericArray extends readonly (TheDate | SerializedTheDate)[],
>(
	array: GenericArray,
	type: SortType
): TheDate[];

export function sort(...args: [readonly (TheDate | SerializedTheDate)[], SortType] | [SortType]) {
	if (args.length === 1) {
		const [type] = args;

		return (array: readonly (TheDate | SerializedTheDate)[]) => sort(array, type);
	}

	const [array, type] = args;

	return array
		.map(toTimestamp)
		.sort(
			type === "DSC"
				? (first, second) => second - first
				: (first, second) => first - second,
		)
		.map(TheDate.new);
}
