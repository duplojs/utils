export function includes<
	GenericSearchString extends string,
	GenericString extends string,
>(
	searchString: GenericSearchString,
): (input: GenericString) => input is Extract<GenericString, `${string}${GenericSearchString}${string}`>;

export function includes<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
): input is Extract<GenericString, `${string}${GenericSearchString}${string}`>;

export function includes(...args: [string, string] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;
		return (input: string) => includes(input, searchString);
	}

	const [input, searchString] = args as [string, string];

	return input.includes(searchString);
}
