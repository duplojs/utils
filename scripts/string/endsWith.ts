export function endsWith<
	GenericSearchString extends string,
>(
	searchString: GenericSearchString,
	length?: number,
): <
	GenericString extends string,
>(str: GenericString) => str is Extract<GenericString, `${string}${GenericSearchString}`>;

export function endsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	str: GenericString,
	searchString: GenericSearchString,
	length?: number,
): str is Extract<GenericString, `${string}${GenericSearchString}`>;

export function endsWith(...args: [string, string, number?] | [string, number?]): any {
	if (typeof args[0] === "string" && typeof args[1] !== "string") {
		const [searchString, length] = args;
		return (str: string) => endsWith(str, searchString, length);
	}

	const [str, searchString, length] = args as [string, string, number?];

	return str.endsWith(searchString, length);
}
