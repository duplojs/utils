export function isIn<
	GenericInput extends string,
	GenericValue extends string,
>(
	array: readonly GenericValue[]
): (input: GenericInput) => input is Extract<GenericInput, GenericValue>;

export function isIn<
	GenericInput extends string,
	GenericValue extends string,
>(
	input: GenericInput,
	array: readonly GenericValue[]
): input is Extract<GenericInput, GenericValue>;

export function isIn(
	...args: [string, readonly string[]] | [readonly string[]]
) {
	if (args.length === 1) {
		const [array] = args;

		return (input: string) => isIn(input, array);
	}

	const [input, array] = args;

	return array.includes(input);
}
