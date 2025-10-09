export function replace<
	GenericInput extends string,
>(
	pattern: string | RegExp,
	replacement: string,
): (input: GenericInput) => string;

export function replace<
	GenericInput extends string,
>(
	input: GenericInput,
	pattern: string | RegExp,
	replacement: string,
): string;

export function replace(...args: [string, string | RegExp, string] | [string | RegExp, string]): any {
	if (args.length === 2) {
		const [pattern, replacement] = args;
		return (input: string) => replace(input, pattern, replacement);
	}

	const [input, pattern, replacement] = args;

	return input.replace(pattern, replacement);
}
