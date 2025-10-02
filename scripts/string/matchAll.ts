export function matchAll(
	pattern: RegExp,
): (input: string) => RegExpMatchArray[];

export function matchAll(
	input: string,
	pattern: RegExp,
): RegExpMatchArray[];

export function matchAll(...args: [string, RegExp] | [RegExp]): any {
	if (args.length === 1) {
		const [pattern] = args;
		return (input: string) => matchAll(input, pattern);
	}

	const [input, pattern] = args;

	return Array.from(input.matchAll(pattern));
}
