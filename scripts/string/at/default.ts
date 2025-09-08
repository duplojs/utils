export function at<
	GenericString extends string,
	GenericIndex extends number,
>(
	index: GenericIndex,
): (string: GenericString) => string | undefined;

export function at<
	GenericString extends string,
	GenericIndex extends number,
>(
	string: GenericString,
	index: GenericIndex,
): string | undefined;

export function at(...args: [string, number] | [number]) {
	if (args.length === 1) {
		const [index] = args;
		return (string: string) => at(string, index);
	}

	const [string, index] = args;

	return string.at(index);
}
