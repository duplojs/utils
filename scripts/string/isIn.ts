/**
 * {@include string/isIn/index.md}
 */
export function isIn<
	GenericValue extends string,
>(
	array: readonly (GenericValue | string)[]
): (input: string) => input is GenericValue;

export function isIn<
	GenericValue extends string,
>(
	input: string,
	array: readonly (GenericValue | string)[]
): input is GenericValue;

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
