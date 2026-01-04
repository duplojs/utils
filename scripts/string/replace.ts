export interface StringReplacerParams {
	matchedValue: string;
	groups: string[];
	namedGroups?: Record<string, string>;
	offset: number;
	self: string;
}

export type StringReplacer = (
	params: StringReplacerParams
) => string;

/**
 * {@include string/replace/index.md}
 */
export function replace<
	GenericInput extends string,
>(
	pattern: string | RegExp,
	replacement: string | StringReplacer,
): (input: GenericInput) => string;

export function replace<
	GenericInput extends string,
>(
	input: GenericInput,
	pattern: string | RegExp,
	replacement: string | StringReplacer,
): string;

export function replace(
	...args: [string, string | RegExp, string | StringReplacer]
		| [string | RegExp, string | StringReplacer]
): any {
	if (args.length === 2) {
		const [pattern, replacement] = args;
		return (input: string) => replace(input, pattern, replacement);
	}

	const [input, pattern, replacement] = args;

	if (typeof replacement === "function") {
		return input.replace(
			pattern,
			(
				matchedValue,
				...argsRest: (
					| [
						...captures: string[],
						offset: number,
						self: string,
					]
					| [
						...captures: string[],
						offset: number,
						self: string,
						namedGroups: Record<string, string>,
					]
				)
			) => {
				const namedGroups = typeof argsRest[argsRest.length - 1] === "object"
					? argsRest.pop() as Record<string, string>
					: undefined;

				const [offset, self] = argsRest.splice(-2, 2) as [number, string];

				return replacement({
					matchedValue,
					namedGroups,
					offset,
					self,
					groups: argsRest as string[],
				});
			},
		);
	}

	return input.replace(pattern, replacement);
}
