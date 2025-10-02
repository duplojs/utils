export function lastIndexOf(
	searchString: string,
): (input: string) => number | undefined;

export function lastIndexOf(
	input: string,
	searchString: string,
	position?: number,
): number | undefined;

export function lastIndexOf(...args: [string, string, number?] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;
		return (input: string) => lastIndexOf(input, searchString);
	}

	const [input, searchString, position] = args;

	const result = input.lastIndexOf(searchString, position);
	return result === -1 ? undefined : result;
}
