export function replace(
	pattern: string | RegExp,
	replacement: string,
): (str: string) => string;

export function replace(
	str: string,
	pattern: string | RegExp,
	replacement: string,
): string;

export function replace(...args: [string, string | RegExp, string] | [string | RegExp, string]): any {
	if (args.length === 2) {
		const [pattern, replacement] = args;
		return (str: string) => replace(str, pattern, replacement);
	}

	const [str, pattern, replacement] = args;

	return str.replace(pattern, replacement);
}
