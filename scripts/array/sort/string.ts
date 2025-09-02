type Sort = "asc" | "dsc";

export function sortString(sort?: Sort): (array: string[]) => string[];
export function sortString(array: string[], sort?: Sort): string[];
export function sortString(...args: [string[], sort?: Sort] | [sort?: Sort]) {
	if (args[0] === undefined || typeof args[0] === "string") {
		const [sort] = args;

		return (array: string[]) => sortString(array, sort);
	}

	const [array, sort] = args;

	return [...array].sort(
		sort === "dsc"
			// eslint-disable-next-line no-nested-ternary
			? (first, second) => (first < second
				? 1
				: first > second
					? -1
					: 0
			)
			: undefined,
	);
}

