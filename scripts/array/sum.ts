export function sum(array: number[]): number {
	let result = 0;

	for (const number of array) {
		result += number;
	}

	return result;
}
