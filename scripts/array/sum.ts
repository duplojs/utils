export function sum<
	GenericArray extends readonly number[],
>(array: GenericArray): number {
	let result = 0;

	for (const number of array) {
		result += number;
	}

	return result;
}
