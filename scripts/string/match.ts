export function match<
	GenericInput extends string,
>(
	pattern: string | RegExp,
): (input: GenericInput) => RegExpMatchArray | undefined;

export function match<
	GenericInput extends string,
>(
	input: GenericInput,
	pattern: string | RegExp,
): RegExpMatchArray | undefined;

export function match(...args: [string, string | RegExp] | [string | RegExp]): any {
	if (args.length === 1) {
		const [pattern] = args;
		return (input: string) => match(input, pattern);
	}

	const [input, pattern] = args;

	const result = input.match(pattern);

	return result ? result : undefined;
}
