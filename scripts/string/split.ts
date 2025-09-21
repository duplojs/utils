interface StringSplitParams {
	limit?: number;
}

export function split(
	separator: string | RegExp,
	params?: StringSplitParams,
): (str: string) => string[];

export function split(
	str: string,
	separator: string | RegExp,
	params?: StringSplitParams,
): string[];

export function split(
	...args: [string, string | RegExp, StringSplitParams?] | [string | RegExp, StringSplitParams?]
): any {
	if (args.length === 1) {
		const [separator] = args;
		return (str: string) => split(str, separator);
	}

	if (args.length === 2 && typeof args[1] === "object" && !(args[1] instanceof RegExp)) {
		const [separator, params] = args;
		return (str: string) => split(str, separator, params);
	}

	const [str, separator, params] = args as [string, string | RegExp, StringSplitParams?];

	return str.split(separator, params?.limit);
}
