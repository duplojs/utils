export function endsWith<
	GenericSearchString extends string,
>(
	searchString: GenericSearchString,
	position?: number,
): <
	GenericString extends string,
>(input: GenericString) => input is Extract<GenericString, `${string}${GenericSearchString}`>;

export function endsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
	position?: number,
): input is Extract<GenericString, `${string}${GenericSearchString}`>;

export function endsWith(...args: [string, string, number?] | [string, number?]): any {
	if (typeof args[0] === "string" && typeof args[1] !== "string") {
		const [searchString, position] = args;
		return (input: string) => endsWith(input, searchString, position);
	}

	const [input, searchString, position] = args as [string, string, number?];

	return input.endsWith(searchString, position);
}
