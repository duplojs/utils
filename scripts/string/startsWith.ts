export function startsWith<
	GenericSearchString extends string,
>(
	searchString: GenericSearchString,
	position?: number,
): <
	GenericString extends string,
>(str: GenericString) => str is Extract<GenericString, `${GenericSearchString}${string}`>;

export function startsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	str: GenericString,
	searchString: GenericSearchString,
	position?: number,
): str is Extract<GenericString, `${GenericSearchString}${string}`>;

export function startsWith(...args: [string, string, number?] | [string, number?]): any {
	if (typeof args[0] === "string" && typeof args[1] !== "string") {
		const [searchString, position] = args;
		return (str: string) => startsWith(str, searchString, position);
	}

	const [str, searchString, position] = args as [string, string, number?];

	return str.startsWith(searchString, position);
}
