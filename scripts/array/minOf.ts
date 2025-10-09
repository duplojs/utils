export function minOf<
	GenericArray extends readonly number[],
>(values: GenericArray): number | undefined {
	const [first, ...rest] = values;

	if (first === undefined) {
		return undefined;
	}

	let result = first;

	for (const value of rest) {
		if (value < result) {
			result = value;
		}
	}

	return result;
}
