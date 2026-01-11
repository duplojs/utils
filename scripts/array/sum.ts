/**
 * {@include array/sum/index.md}
 */
export function sum<
	GenericArray extends readonly number[],
>(array: GenericArray): number {
	let result = 0;

	for (const number of array) {
		result += number;
	}

	return result;
}
