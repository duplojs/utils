import { type SortType } from "@scripts/common";

export function sort<
	GenericArray extends readonly number[],
>(type: SortType): (array: GenericArray) => number[];
export function sort<
	GenericArray extends readonly number[],
>(array: GenericArray, type: SortType): number[];
export function sort(...args: [readonly number[], SortType] | [SortType]) {
	if (args.length === 1) {
		const [type] = args;

		return (array: readonly number[]) => sort(array, type);
	}

	const [array, type] = args;

	return [...array].sort(
		type === "DSC"
			? (first, second) => second - first
			: (first, second) => first - second,
	);
}
