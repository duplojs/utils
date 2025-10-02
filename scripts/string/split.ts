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
): (input: GenericString) => SplitString<GenericString, GenericSeparator, GenericLimit>;

export function split<
	GenericString extends string,
	GenericSeparator extends string | RegExp,
>(
	separator: GenericSeparator,
): (input: GenericString) => SplitString<GenericString, GenericSeparator>;

export function split<
	GenericString extends string,
	GenericSeparator extends string | RegExp,
	GenericLimit extends number,
>(
	input: GenericString,
	separator: GenericSeparator,
	params: StringSplitParams<GenericLimit>,
): SplitString<GenericString, GenericSeparator, GenericLimit>;

export function split<
	GenericString extends string,
	GenericSeparator extends string | RegExp,
>(
	input: GenericString,
	separator: GenericSeparator,
): SplitString<GenericString, GenericSeparator>;

export function split(
	...args: [string, string | RegExp, StringSplitParams<number>?] | [string | RegExp, StringSplitParams<number>?]
): any {
	if (args.length === 1) {
		const [separator] = args;
		return (input: string) => split(input, separator);
	}

	if (args.length === 2 && typeof args[1] === "object" && !(args[1] instanceof RegExp)) {
		const [separator, params] = args;
		return (input: string) => split(input, separator, params);
	}

	const [input, separator, params] = args as [string, string | RegExp, StringSplitParams<number>?];

	return input.split(separator, params?.limit);
}
