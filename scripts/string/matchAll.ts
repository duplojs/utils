export function matchAll(
	pattern: RegExp,
): (str: string) => RegExpMatchArray[];

export function matchAll(
	str: string,
	pattern: RegExp,
): RegExpMatchArray[];

export function matchAll(...args: [string, RegExp] | [RegExp]): any {
	if (args.length === 1) {
		const [pattern] = args;
		return (str: string) => matchAll(str, pattern);
	}

	const [str, pattern] = args;

	return Array.from(str.matchAll(pattern));
}
