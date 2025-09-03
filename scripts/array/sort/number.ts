type Sort = "asc" | "dsc";

export function sortNumber(sort?: Sort): (array: readonly number[]) => number[];
export function sortNumber(array: readonly number[], sort?: Sort): number[];
export function sortNumber(...args: [readonly number[], sort?: Sort] | [sort?: Sort]): any {
	if (args[0] === undefined || typeof args[0] === "string") {
		const [sort] = args;

		return (array: number[]) => sortNumber(array, sort);
	}

	const [array, sort] = args;

	return [...array].sort(
		sort === "dsc"
			? (first, second) => second - first
			: (first, second) => first - second,
	);
}
