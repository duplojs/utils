export function concat(
	text: string,
): (input: string) => string;

export function concat(
	input: string,
	...textsRest: string[]
): string;

export function concat(...args: [string, ...string[]] | [string]) {
	if (args.length === 1) {
		const [text] = args;
		return (input: string) => concat(input, text);
	}

	const [input, ...textsRest] = args;

	return input.concat(...textsRest);
}
