type Sort = "asc" | "dsc";

export function sortString(sort?: Sort): (array: readonly string[]) => string[];
export function sortString(array: readonly string[], sort?: Sort): string[];
export function sortString(...args: [readonly string[], sort?: Sort] | [sort?: Sort]) {
	if (args[0] === undefined || typeof args[0] === "string") {
		const [sort] = args;

		return (array: string[]) => sortString(array, sort);
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

