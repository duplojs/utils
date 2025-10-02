export function indexOf(
	searchString: string,
): (input: string) => number | undefined;

export function indexOf(
	input: string,
	searchString: string,
	position?: number,
): number | undefined;

export function indexOf(...args: [string, string, number?] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;
		return (input: string) => indexOf(input, searchString);
	}

	const [input, searchString, position] = args;

	const result = input.indexOf(searchString, position);
	return result === -1 ? undefined : result;
}
