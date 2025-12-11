import { type SortType } from "@scripts/common";
import { createOrThrow } from "./createOrThrow";
import { toTimestamp } from "./toTimestamp";
import { type TheDate } from "./types";

export function sort<
	GenericArray extends readonly TheDate[],
>(type: SortType): (array: GenericArray) => TheDate[];
export function sort<
	GenericArray extends readonly TheDate[],
>(array: GenericArray, type: SortType): TheDate[];
export function sort(...args: [readonly TheDate[], SortType] | [SortType]) {
	if (args.length === 1) {
		const [type] = args;

		return (array: readonly TheDate[]) => sort(array, type);
	}

	const [array, type] = args;

	return array
		.map(toTimestamp)
		.sort(
			type === "DSC"
				? (first, second) => second - first
				: (first, second) => first - second,
		)
		.map(createOrThrow);
}
