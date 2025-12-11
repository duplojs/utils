import { type SortType } from "@scripts/common";

export function sort<
	GenericArray extends readonly string[],
>(type: SortType): (array: GenericArray) => string[];
export function sort<
	GenericArray extends readonly string[],
>(array: GenericArray, type: SortType): string[];
export function sort(...args: [readonly string[], SortType] | [SortType]) {
	if (args.length === 1) {
		const [type] = args;

		return (array: readonly string[]) => sort(array, type);
	}

	const [array, type] = args;

	return [...array].sort(
		type === "DSC"
			? (first, second) => {
				if (first < second) {
					return 1;
				} else if (first > second) {
					return -1;
				} else {
					return 0;
				}
			}
			: undefined,
	);
}
