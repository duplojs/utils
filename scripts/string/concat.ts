export function concat(
	text: string,
): (str: string) => string;

export function concat(
	str: string,
	...textsRest: string[]
): string;

export function concat(...args: [string, ...string[]] | [string]) {
	if (args.length === 1) {
		const [text] = args;
		return (str: string) => concat(str, text);
	}

	const [str, ...textsRest] = args;

	return str.concat(...textsRest);
}
