export function startsWith<
	GenericSearchString extends string,
	GenericString extends string,
>(
	searchString: GenericSearchString,
): (input: GenericString) => input is Extract<GenericString, `${GenericSearchString}${string}`>;

export function startsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
): input is Extract<GenericString, `${GenericSearchString}${string}`>;

export function startsWith(...args: [string, string] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;
		return (input: string) => startsWith(input, searchString);
	}

	const [input, searchString] = args;

	return input.startsWith(searchString);
}
