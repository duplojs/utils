export function search(
	pattern: string | RegExp,
): (str: string) => number | undefined;

export function search(
	str: string,
	pattern: string | RegExp,
): number | undefined;

export function search(...args: [string, string | RegExp] | [string | RegExp]): any {
	if (args.length === 1) {
		const [pattern] = args;
		return (str: string) => search(str, pattern);
	}

	const [str, pattern] = args;

	const result = str.search(pattern);
	return result === -1 ? undefined : result;
}
