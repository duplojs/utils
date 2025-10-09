type Sort = "asc" | "dsc";

export function sortString<
	GenericArray extends readonly string[],
>(sort: Sort): (array: GenericArray) => string[];
export function sortString<
	GenericArray extends readonly string[],
>(array: GenericArray, sort: Sort): string[];
export function sortString(...args: [readonly string[], Sort] | [Sort]) {
	if (args.length === 1) {
		const [sort] = args;

		return (array: readonly string[]) => sortString(array, sort);
	}

	const [array, sort] = args;

	return [...array].sort(
		sort === "dsc"
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
