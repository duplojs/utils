export function endsWith<
	GenericSearchString extends string,
>(
	searchString: GenericSearchString,
	length?: number,
): <
	GenericString extends string,
>(input: GenericString) => input is Extract<GenericString, `${string}${GenericSearchString}`>;

export function endsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
	length?: number,
): input is Extract<GenericString, `${string}${GenericSearchString}`>;

export function endsWith(...args: [string, string, number?] | [string, number?]): any {
	if (typeof args[0] === "string" && typeof args[1] !== "string") {
		const [searchString, length] = args;
		return (input: string) => endsWith(input, searchString, length);
	}

	const [input, searchString, length] = args as [string, string, number?];

	return input.endsWith(searchString, length);
}
