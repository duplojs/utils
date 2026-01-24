export interface ExtractResult {
	matchedValue: string;
	groups: string[];
	namedGroups?: Record<string, string>;
	offset: number;
	self: string;
}

/**
 * {@include string/extract/index.md}
 */
export function extract<
	GenericInput extends string,
>(
	pattern: string | RegExp,
): (input: GenericInput) => ExtractResult | undefined;

export function extract<
	GenericInput extends string,
>(
	input: GenericInput,
	pattern: string | RegExp,
): ExtractResult | undefined;

export function extract(...args: [string, string | RegExp] | [string | RegExp]): any {
	if (args.length === 1) {
		const [pattern] = args;
		return (input: string) => extract(input, pattern);
	}

	const [input, pattern] = args;

	const result = input.match(pattern);

	if (!result) {
		return undefined;
	}

	return {
		matchedValue: result[0],
		groups: result.slice(1),
		namedGroups: result.groups ? { ...result.groups } : undefined,
		offset: result.index ?? 0,
		self: result.input ?? input,
	};
}
