export function startsWith<
	GenericSearchString extends string,
>(
	searchString: GenericSearchString,
	position?: number,
): <
	GenericString extends string,
>(input: GenericString) => input is Extract<GenericString, `${GenericSearchString}${string}`>;

export function startsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
	position?: number,
): input is Extract<GenericString, `${GenericSearchString}${string}`>;

export function startsWith(...args: [string, string, number?] | [string, number?]): any {
	if (typeof args[0] === "string" && typeof args[1] !== "string") {
		const [searchString, position] = args;
		return (input: string) => startsWith(input, searchString, position);
	}

	const [input, searchString, position] = args as [string, string, number?];

	return input.startsWith(searchString, position);
}
