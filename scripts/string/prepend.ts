/**
 * {@include string/prepend/index.md}
 */
export function prepend(
	text: string,
): (input: string) => string;

export function prepend(
	input: string,
	...textsRest: string[]
): string;

export function prepend(...args: [string, ...string[]] | [string]) {
	if (args.length === 1) {
		const [text] = args;
		return (input: string) => prepend(input, text);
	}

	const [input, ...textsRest] = args;

	return "".concat(...textsRest, input);
}
