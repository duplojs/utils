export function indexOf(
	searchString: string,
): (str: string) => number | undefined;

export function indexOf(
	str: string,
	searchString: string,
	position?: number,
): number | undefined;

export function indexOf(...args: [string, string, number?] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;
		return (str: string) => indexOf(str, searchString);
	}

	const [str, searchString, position] = args;

	const result = str.indexOf(searchString, position);
	return result === -1 ? undefined : result;
}
