import { type SortType } from "@scripts/common";
import { createTheTime } from "./createTheTime";
import { type TheTime } from "./types";
import { toTimeValue } from "./toTimeValue";

export function sortTimes<
	GenericArray extends readonly TheTime[],
>(type: SortType): (array: GenericArray) => TheTime[];
export function sortTimes<
	GenericArray extends readonly TheTime[],
>(array: GenericArray, type: SortType): TheTime[];
export function sortTimes(...args: [readonly TheTime[], SortType] | [SortType]) {
	if (args.length === 1) {
		const [type] = args;

		return (array: readonly TheTime[]) => sortTimes(array, type);
	}

	const [array, type] = args;

	return array
		.map(toTimeValue)
		.sort(
			type === "DSC"
				? (first, second) => second - first
				: (first, second) => first - second,
		)
		.map(createTheTime);
}
