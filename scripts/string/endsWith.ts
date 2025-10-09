export function endsWith<
	GenericSearchString extends string,
	GenericString extends string,
>(
	searchString: GenericSearchString,
): (input: GenericString) => input is Extract<GenericString, `${string}${GenericSearchString}`>;

export function endsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
): input is Extract<GenericString, `${string}${GenericSearchString}`>;

export function endsWith(...args: [string, string] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;

		return (input: string) => endsWith(input, searchString);
	}

	const [input, searchString] = args;

	return input.endsWith(searchString);
}
