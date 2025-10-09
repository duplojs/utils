export function search<
	GenericInput extends string,
>(
	pattern: string | RegExp,
): (input: GenericInput) => number | undefined;

export function search(
	input: string,
	pattern: string | RegExp,
): number | undefined;

export function search(...args: [string, string | RegExp] | [string | RegExp]): any {
	if (args.length === 1) {
		const [pattern] = args;
		return (input: string) => search(input, pattern);
	}

	const [input, pattern] = args;

	const result = input.search(pattern);
	return result === -1 ? undefined : result;
}
