export function includes<
	GenericSearchString extends string,
>(
	searchString: GenericSearchString,
	position?: number,
): <
	GenericString extends string,
>(str: GenericString) => str is Extract<GenericString, `${string}${GenericSearchString}${string}`>;

export function includes<
	GenericString extends string,
	GenericSearchString extends string,
>(
	str: GenericString,
	searchString: GenericSearchString,
	position?: number,
): str is Extract<GenericString, `${string}${GenericSearchString}${string}`>;

export function includes(...args: [string, string, number?] | [string, number?]): any {
	if (typeof args[0] === "string" && typeof args[1] !== "string") {
		const [searchString, position] = args;
		return (str: string) => includes(str, searchString, position);
	}

	const [str, searchString, position] = args as [string, string, number?];

	return str.includes(searchString, position);
}
