export function matchAll<
	GenericInput extends string,
>(
	pattern: RegExp,
): (input: GenericInput) => RegExpStringIterator<RegExpMatchArray>;

export function matchAll(
	input: string,
	pattern: RegExp,
): RegExpStringIterator<RegExpMatchArray>;

export function matchAll(...args: [string, RegExp] | [RegExp]): any {
	if (args.length === 1) {
		const [pattern] = args;
		return (input: string) => matchAll(input, pattern);
	}

	const [input, pattern] = args;

	return input.matchAll(pattern);
}
