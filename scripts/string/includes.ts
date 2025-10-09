export function includes<
	GenericSearchString extends string,
	GenericString extends string,
>(
	searchString: GenericSearchString,
	position?: number,
): (input: GenericString) => input is Extract<GenericString, `${string}${GenericSearchString}${string}`>;

export function includes<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
	position?: number,
): input is Extract<GenericString, `${string}${GenericSearchString}${string}`>;

export function includes(...args: [string, string, number?] | [string, number?]): any {
	if (typeof args[0] === "string" && typeof args[1] !== "string") {
		const [searchString, position] = args;
		return (input: string) => includes(input, searchString, position);
	}

	const [input, searchString, position] = args as [string, string, number?];

	return input.includes(searchString, position);
}
