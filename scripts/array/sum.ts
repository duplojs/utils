export function sum(array: readonly number[]): number {
	let result = 0;

	for (const number of array) {
		result += number;
	}

	return result;
}
