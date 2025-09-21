export function replaceAll(
	pattern: string | RegExp,
	replacement: string,
): (str: string) => string;

export function replaceAll(
	str: string,
	pattern: string | RegExp,
	replacement: string,
): string;

export function replaceAll(...args: [string, string | RegExp, string] | [string | RegExp, string]): any {
	if (args.length === 2) {
		const [pattern, replacement] = args;
		return (str: string) => replaceAll(str, pattern, replacement);
	}

	const [str, pattern, replacement] = args;

	return str.replaceAll(pattern, replacement);
}
