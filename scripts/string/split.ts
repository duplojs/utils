import type { SplitString } from "./types/split";

interface StringSplitParams<
	GenericLimit extends number,
> {
	limit: GenericLimit;
}

export function split<
	GenericString extends string,
	GenericSeparator extends string | RegExp,
	GenericLimit extends number,
>(
	separator: GenericSeparator,
	params: StringSplitParams<GenericLimit>,
): (str: GenericString) => SplitString<GenericString, GenericSeparator, GenericLimit>;

export function split<
	GenericString extends string,
	GenericSeparator extends string | RegExp,
>(
	separator: GenericSeparator,
): (str: GenericString) => SplitString<GenericString, GenericSeparator>;

export function split<
	GenericString extends string,
	GenericSeparator extends string | RegExp,
	GenericLimit extends number,
>(
	str: GenericString,
	separator: GenericSeparator,
	params: StringSplitParams<GenericLimit>,
): SplitString<GenericString, GenericSeparator, GenericLimit>;

export function split<
	GenericString extends string,
	GenericSeparator extends string | RegExp,
>(
	str: GenericString,
	separator: GenericSeparator,
): SplitString<GenericString, GenericSeparator>;

export function split(
	...args: [string, string | RegExp, StringSplitParams<number>?] | [string | RegExp, StringSplitParams<number>?]
): any {
	if (args.length === 1) {
		const [separator] = args;
		return (str: string) => split(str, separator);
	}

	if (args.length === 2 && typeof args[1] === "object" && !(args[1] instanceof RegExp)) {
		const [separator, params] = args;
		return (str: string) => split(str, separator, params);
	}

	const [str, separator, params] = args as [string, string | RegExp, StringSplitParams<number>?];

	return str.split(separator, params?.limit);
}
