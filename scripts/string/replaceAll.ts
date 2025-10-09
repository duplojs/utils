export function replaceAll<
	GenericInput extends string,
>(
	pattern: string | RegExp,
	replacement: string,
): (input: GenericInput) => string;

export function replaceAll(
	input: string,
	pattern: string | RegExp,
	replacement: string,
): string;

export function replaceAll(...args: [string, string | RegExp, string] | [string | RegExp, string]): any {
	if (args.length === 2) {
		const [pattern, replacement] = args;
		return (input: string) => replaceAll(input, pattern, replacement);
	}

	const [input, pattern, replacement] = args;

	return input.replaceAll(pattern, replacement);
}
