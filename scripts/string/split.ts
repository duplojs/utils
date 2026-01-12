import type { Split } from "./types/split";

interface StringSplitParams<
	GenericLimit extends number,
> {
	limit: GenericLimit;
}

/**
 * {@include string/split/index.md}
 */
export function split<
	GenericString extends string,
	GenericSeparator extends string,
>(
	separator: GenericSeparator | RegExp,
): (input: GenericString) => Split<GenericString, GenericSeparator>;

export function split<
	GenericString extends string,
	GenericSeparator extends string,
	GenericLimit extends number,
>(
	input: GenericString,
	separator: GenericSeparator | RegExp,
	params?: StringSplitParams<GenericLimit>,
): Split<GenericString, GenericSeparator, GenericLimit>;

export function split(
	...args: [string, string | RegExp, StringSplitParams<number>?] | [string | RegExp]
): any {
	if (args.length === 1) {
		const [separator] = args;
		return (input: string) => split(input, separator);
	}

	const [input, separator, params] = args;

	return input.split(separator, params?.limit);
}
