export function match(
	pattern: string | RegExp,
): (str: string) => RegExpMatchArray | undefined;

export function match(
	str: string,
	pattern: string | RegExp,
): RegExpMatchArray | undefined;

export function match(...args: [string, string | RegExp] | [string | RegExp]): any {
	if (args.length === 1) {
		const [pattern] = args;
		return (str: string) => match(str, pattern);
	}

	const [str, pattern] = args;

	const result = str.match(pattern);

	return result ? result : undefined;
}
