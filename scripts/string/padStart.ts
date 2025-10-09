export function padStart<
	GenericInput extends string,
>(
	targetLength: number,
	padString: string,
): (input: GenericInput) => string;

export function padStart(
	input: string,
	targetLength: number,
	padString: string,
): string;

export function padStart(...args: [string, number, string] | [number, string]): any {
	if (args.length === 2) {
		const [targetLength, padString] = args;
		return (input: string) => padStart(input, targetLength, padString);
	}

	const [input, targetLength, padString] = args;

	return input.padStart(targetLength, padString);
}
