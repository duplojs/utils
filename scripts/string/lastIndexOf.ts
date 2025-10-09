export function lastIndexOf<
	GenericInput extends string,
>(
	searchString: string,
): (input: GenericInput) => number | undefined;

export function lastIndexOf<
	GenericInput extends string,
>(
	input: GenericInput,
	searchString: string,
	position?: number,
): number | undefined;

export function lastIndexOf(...args: [string, string, number?] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;
		return (input: string) => lastIndexOf(input, searchString);
	}

	const [input, searchString, position] = args;

	const result = input.lastIndexOf(searchString, position);
	return result === -1 ? undefined : result;
}
