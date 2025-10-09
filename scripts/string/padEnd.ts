export function padEnd<
	GenericInput extends string,
>(
	targetLength: number,
	padString: string,
): (input: GenericInput) => string;

export function padEnd<
	GenericInput extends string,
>(
	input: GenericInput,
	targetLength: number,
	padString: string,
): string;

export function padEnd(...args: [string, number, string] | [number, string]): any {
	if (args.length === 2) {
		const [targetLength, padString] = args;
		return (input: string) => padEnd(input, targetLength, padString);
	}

	const [input, targetLength, padString] = args;

	return input.padEnd(targetLength, padString);
}
