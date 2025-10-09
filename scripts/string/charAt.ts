export function charAt<
	GenericInput extends string,
>(
	index: number,
): (input: GenericInput) => string;

export function charAt(
	input: string,
	index: number,
): string;

export function charAt(...args: [string, number] | [number]): any {
	if (args.length === 1) {
		const [index] = args;
		return (input: string) => charAt(input, index);
	}

	const [input, index] = args;

	return input.charAt(index);
}
