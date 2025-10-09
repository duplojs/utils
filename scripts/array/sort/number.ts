type Sort = "asc" | "dsc";

export function sortNumber<
	GenericArray extends readonly number[],
>(sort: Sort): (array: GenericArray) => number[];
export function sortNumber<
	GenericArray extends readonly number[],
>(array: GenericArray, sort: Sort): number[];
export function sortNumber(...args: [readonly number[], Sort] | [Sort]): any {
	if (args.length === 1) {
		const [sort] = args;

		return (array: readonly number[]) => sortNumber(array, sort);
	}

	const [array, sort] = args;

	return [...array].sort(
		sort === "dsc"
			? (first, second) => second - first
			: (first, second) => first - second,
	);
}
