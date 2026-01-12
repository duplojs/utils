/**
 * {@include string/at/index.md}
 */
export function at<
	GenericString extends string,
	GenericIndex extends number,
>(
	index: GenericIndex,
): (input: GenericString) => string | undefined;

export function at<
	GenericString extends string,
	GenericIndex extends number,
>(
	input: GenericString,
	index: GenericIndex,
): string | undefined;

export function at(...args: [string, number] | [number]) {
	if (args.length === 1) {
		const [index] = args;
		return (input: string) => at(input, index);
	}

	const [input, index] = args;

	return input.at(index);
}
