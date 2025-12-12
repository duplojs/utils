export function isLastIndex<
	GenericInput extends readonly unknown[],
>(
	index: number,
): (input: GenericInput) => boolean;

export function isLastIndex<
	GenericInput extends readonly unknown[],
>(
	input: GenericInput,
	index: number,
): boolean;

export function isLastIndex(
	...args: [number] | [readonly unknown[], number]
) {
	if (args.length === 1) {
		const [index] = args;

		return (input: readonly unknown[]) => isLastIndex(input, index);
	}

	const [input, index] = args;

	return (input.length - 1) === index;
}
