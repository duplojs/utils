export function lastIndexOf(
	searchString: string,
): (str: string) => number | undefined;

export function lastIndexOf(
	str: string,
	searchString: string,
	position?: number,
): number | undefined;

export function lastIndexOf(...args: [string, string, number?] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;
		return (str: string) => lastIndexOf(str, searchString);
	}

	const [str, searchString, position] = args;

	const result = str.lastIndexOf(searchString, position);
	return result === -1 ? undefined : result;
}
